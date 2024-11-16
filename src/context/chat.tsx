import axios from '@axios';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ViewContext } from '@context';
import { ICustomer, IMessage } from '@interfaces';
import { useLocation } from '@hooks';

const limit = 20;

interface Params {
  limit: number;
  page: number;
  search?: string;
};

interface ChatContextType {
  search: string;
  setSearch: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
  conversation: IMessage[];
  setConversation: (messages: IMessage[]) => void;
  customer: ICustomer | null;
  setCustomer: (customer: ICustomer | null) => void;
  customers: ICustomer[];
  setCustomers: (customers: ICustomer[]) => void;
  message: string;
  setMessage: (message: string) => void;
  isMessageSending: boolean;
  file: File | null;
  setFile: (file: File | null) => void;
  audio: string;
  setAudio: (audio: string) => void;
  rAudio: File | null;
  setRAudio: (audio: File | null) => void;
  fetchCustomers: () => Promise<void>;
  fetchConversation: (customer_id: string) => Promise<void>;
  handleSendMessage: () => Promise<void>;
  isCustomersLoading: boolean;
  handleSyncChats: (customer_id: string | undefined) => Promise<void>;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const context = useContext(ViewContext);
  const location = useLocation();
  const localCustomer = location?.state?.customer;

  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [customers, setCustomers] = useState<ICustomer[] | []>([]);
  const [isCustomersLoading, setIsCustomersLoading] = useState<boolean>(false);
  const [customer, setCustomer] = useState<ICustomer | null>(null);
  const [conversation, setConversation] = useState<IMessage[] | []>([]);
  const [message, setMessage] = useState<string>('');
  const [isMessageSending, setIsMessageSending] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [audio, setAudio] = useState<string>("");
  const [rAudio, setRAudio] = useState<File | null>(null);

  useEffect(() => {
    fetchCustomers();
  }, [search, page]);

  useEffect(() => {
    if(localCustomer) {
      setCustomer(localCustomer);
      fetchConversation(localCustomer.id);
    };
  }, [localCustomer])

  const fetchCustomers = async () => {
    setIsCustomersLoading(true);
    const params: Params = {
      limit: limit,
      page: page,
    };

    if (search !== '') {
      params.search = search;
    }

    await axios({
      method: 'GET',
      url: `/customers`,
      params: { ...params },
    })
      .then((res) => {
        if (search !== '') {
          setCustomers([...res.data.customers]);
        } else if (search === '' && page === 1) {
          setCustomers([...res.data.customers]);
        } else {
          setCustomers((prev) => [...prev, ...res.data.customers]);
        };

        setIsCustomersLoading(false);
      })
      .catch(() => {
        context?.notification.show('Ошибка при загрузке чатов', 'error');
      });
  };

  const fetchConversation = async (customer_id: string) => {
    await axios({
      method: 'GET',
      url: `/messages/${customer_id}`,
    })
      .then((res) => {
        setConversation(res.data.messages);
      })
      .catch(() => context?.notification.show('Ошибка при загрузке чата', 'error'));
  };

  const handleSendMessage = async () => {
    if (!validateSendMessage()) return;
    setIsMessageSending(true);

    const forms = new FormData();

    if (customer?.id) {
      forms.append('customer_id', customer.id);
    }

    if (message) {
      forms.append('message', message);
      forms.append('type', 'textMessage');
    }

    if (rAudio) {
      forms.append('files', rAudio);
      forms.append('type', 'fileMessage');
    }

    if (file) {
      forms.append('files', file);
      forms.append('type', 'fileMessage');
    }

    await axios({
      method: 'POST',
      url: `/messages`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: forms,
    })
      .then((res) => {
        setConversation((prevConversation) => [...prevConversation, res.data.message]);
        setMessage('');
        setFile(null);
        setAudio("");
        setRAudio(null);
        setIsMessageSending(false);
      })
      .catch(() => {
        context?.notification.show('Ошибка при отправке сообщения', 'error');
      });
  };

  const handleSyncChats = async (customer_id: string | undefined) => {
    if(!customer_id) return;
    await axios({
      method: 'POST',
      url: `/messages/sync/${customer_id}`,
    })
      .then((res) => {
        if(res.data.messages.length > 0) {
          setConversation(res.data.messages);
          context?.notification.show('Чат синхронизирован!', 'success');
        };
      })
      .catch(() => context?.notification.show('Ошибка при загрузке чата', 'error'));
  };

  const validateSendMessage = () => {
    if (file === null && message.length === 0 && rAudio === null) {
      context?.notification.show('Пустое сообщение', 'error');
      return false;
    }

    return true;
  };

  return (
    <ChatContext.Provider
      value={{
        search,
        setSearch,
        page,
        setPage,
        conversation,
        setConversation,
        customer,
        setCustomer,
        customers,
        setCustomers,
        message,
        setMessage,
        isMessageSending,
        file,
        setFile,
        audio,
        setAudio,
        rAudio,
        setRAudio,
        fetchCustomers,
        fetchConversation,
        handleSendMessage,
        isCustomersLoading,
        handleSyncChats
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChats = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChats must be used within a ChatProvider');
  }
  return context;
};
