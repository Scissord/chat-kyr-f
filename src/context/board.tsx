import axios from '@axios';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  KeyboardEvent
} from 'react';
import { useSocketContext, useViewContext } from '@context';
import { DragStart, DropResult } from '@hello-pangea/dnd';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@hooks';
import { RootState } from '@store/index';
import { getUser } from '@store/reducers/authSlice';
import { ICard, IColumn, ICustomer } from '@interfaces';

interface BoardContextType {
  columns: IColumn[];
  cards: { manager_id: string, cards: ICard[], total: number }[];
  columnsLoading: boolean;
  cardsLoading: boolean;
  onDragEnd: (result: DropResult) => void;
  onDragStart: (result: DragStart) => void,
  search: string;
  setSearch: (search: string) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  deleteCard: (card_id: string, manager_id: string) => void;
  toggleFixCard: (card_id: string) => void;
  incrementPage: (columnId: string, managerId: string) => void;
  getColumns: () => void;
};

const BoardContext = createContext<BoardContextType | undefined>(undefined);

export const BoardProvider = ({ children }: { children: ReactNode }) => {
  const { socket, newCardSpot, upCustomer } = useSocketContext();
  const navigate = useNavigate();
  const context = useViewContext();
  const user = useAppSelector((state: RootState) => getUser(state));

  const [search, setSearch] = useState<string>("");

  const [columns, setColumns] = useState<IColumn[]>([])
  const [columnsLoading, setColumnsLoading] = useState<boolean>(false);

  const [cards, setCards] = useState<{ manager_id: string, cards: ICard[], total: number }[]>([]);
  const [cardsLoading, setCardsLoading] = useState<boolean>(false);
  const [pageForColumn, setPageForColumn] = useState<{ [key: string]: { page: number }}>({});

  useEffect(() => {
    getColumns();
  }, [])

  useEffect(() => {
    if(columns.length > 0) {
      getCards();
    }
  }, [columns])

  // Это чтобы поменять место карточки
  useEffect(() => {
    if (newCardSpot?.source?.droppableId && newCardSpot?.destination?.droppableId) {
      const newCards = [...cards]
      const oldManagerId = columns.find((column) => +column.id === +newCardSpot?.source?.droppableId)?.manager_id;
      const newManagerId = columns.find(column => +column.id === +newCardSpot?.destination?.droppableId)?.manager_id;

      if(oldManagerId && newManagerId) {
        const oldCardGroup = newCards.find(cardGroup => +cardGroup.manager_id === +oldManagerId);
        const newCardGroup = newCards.find(cardGroup => +cardGroup.manager_id === +newManagerId);

        if (oldCardGroup && newCardGroup) {
          oldCardGroup.total -= 1;
          newCardGroup.total += 1;

          const [movedCard] = oldCardGroup.cards.splice(newCardSpot?.source?.index, 1);

          if (movedCard) {
            movedCard.manager_id = newManagerId;
            newCardGroup.cards.splice(newCardSpot?.destination?.index, 0, movedCard);
          }
        }
      }

      setCards(newCards);
    }
  }, [newCardSpot, columns]);

  useEffect(() => {
    if (upCustomer) {
      handleRaiseCustomer(upCustomer);
    }
  }, [upCustomer]);

  const incrementPage = async (columnId: string, managerId: string) => {
    const newPages = {...pageForColumn};
    newPages[columnId].page += 1;
    setPageForColumn(newPages);
    await getMoreCards(columnId, managerId);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const inputValue = (e.target as HTMLInputElement).value;

      if (cards) {
        let orderFound = false;
        for (const cardGroup of cards) {
          const card = cardGroup.cards.find(card => +card.order_id === +inputValue);
          if (card) {
            orderFound = true; // Если заказ найден, устанавливаем флаг
            navigate("/chats", { state: { customer: card } });
            break;
          }
        }

        if (!orderFound) {
          context?.notification.show('Заказ не найден!', 'error');
        }
      } else {
        context?.notification.show('На доске нет заказов!', 'error');
      }

    };
  };

  const getColumns = async () => {
    setColumnsLoading(true);
    await axios({
      method: 'GET',
      url: '/board/columns',
    }).then((res) => {
      const pages: { [key: string]: { page: number } } = {};
      for(const column of res.data as IColumn[]) {
        pages[column.id] = { page: 1 };
      }
      setPageForColumn(pages)
      setColumns(res.data);
      setColumnsLoading(false);
    });
  };

  const getCards = async () => {
    if (columns.length === 0) return;
    setCardsLoading(true);
    await axios({
      method: 'POST',
      url: '/board/cards',
    }).then((res) => {
      setCards(res.data);
      setCardsLoading(false);
    });
  };

  const getMoreCards = async (columnId: string, managerId: string) => {
    await axios({
      method: 'POST',
      url: '/board/more-cards',
      data: {
        managerId,
        page: pageForColumn[columnId].page
      }
    }).then((res) => {
      const newCards = [...cards];
      for(const cardGroup of cards) {
        if(cardGroup.manager_id === managerId) {
          cardGroup.cards = [...cardGroup.cards, ...res.data];
        }
      }
      setCards(newCards);
    });
  };

  const deleteCard = useCallback(async (card_id: string) => {
    const confirm = window.confirm('Вы уверены?')
    if(!confirm) return;
    await axios({
      method: 'DELETE',
      url: `/cards/${card_id}`,
    }).then(() => {
      const newCards = [...cards]
      for (const cardGroup of newCards) {
        cardGroup.cards = cardGroup.cards.filter(card => +card.id !== +card_id);
      }
      setCards(newCards);
    });
  }, [cards]);

  const toggleFixCard = useCallback(async (card_id: string) => {
    const confirm = window.confirm('Вы уверены?')
    if(!confirm) return;

    await axios({
      method: 'PATCH',
      url: `/cards/${card_id}/toggle_fix`,
    }).then(() => {
      const newCards = [...cards];
      for(const cardGroup of newCards) {
        const card = cardGroup.cards.find(card => +card.id === +card_id);
        if(card) {
          card.isfixed =!card.isfixed;
        }
      }

      setCards(newCards);
    })
  }, [cards]);

  const onDragStart = useCallback((result: DragStart) => {
    const { draggableId } = result;

    if (user && socket && socket.readyState === WebSocket.OPEN) {
      const message = JSON.stringify({
        type: "onDragStart",
        customer_id: draggableId,
        user_id: user.id,
      });

      socket.send(message);
      console.log(`Message sent: ${message}`);
    } else {
      console.log('WebSocket is not connected');
    }
  }, [socket, user]);

  const onDragEnd = useCallback(async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (user && socket && socket.readyState === WebSocket.OPEN) {
      const message = JSON.stringify({
        type: "onDragEnd",
        customer_id: draggableId,
        user_id: user.id,
        destination,
        source,
      });

      socket.send(message);
      console.log(`Message sent: ${message}`);
    } else {
      console.log('WebSocket is not connected');
    }

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const newCards = [...cards]
    const oldManagerId = columns.find((column) => +column.id === +source.droppableId)?.manager_id;
    const newManagerId = columns.find(column => +column.id === +destination.droppableId)?.manager_id;

    if(oldManagerId && newManagerId) {
      if(oldManagerId === newManagerId) return;
      const oldCardGroup = newCards.find(cardGroup => +cardGroup.manager_id === +oldManagerId);
      const newCardGroup = newCards.find(cardGroup => +cardGroup.manager_id === +newManagerId);

      if (oldCardGroup && newCardGroup) {
        oldCardGroup.total -= 1;
        newCardGroup.total += 1;

        const [movedCard] = oldCardGroup.cards.splice(source.index, 1);

        if (movedCard) {
          movedCard.manager_id = newManagerId;
          newCardGroup.cards.splice(destination.index, 0, movedCard);
        }
      }
    }

    setCards(newCards);

    await axios.patch(`/cards/${draggableId}/move`, {
      manager_id: newManagerId
    });

  }, [user, socket, cards, columns]);

  const handleRaiseCustomer = useCallback((upCustomer: ICard) => {
    const newCards = [...cards];
    const cardGroup = newCards.find(cardGroup => +cardGroup.manager_id === +upCustomer.manager_id);
    if(cardGroup) {
      cardGroup.cards.unshift(upCustomer);
      cardGroup.total += 1;
    }
    setCards(newCards);
  }, [cards]);

  return (
    <BoardContext.Provider
      value={{
        columns,
        cards,
        columnsLoading,
        cardsLoading,
        onDragEnd,
        onDragStart,
        search,
        setSearch,
        handleKeyDown,
        deleteCard,
        toggleFixCard,
        incrementPage,
        getColumns
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('useChats must be used within a ChatProvider');
  }
  return context;
};
