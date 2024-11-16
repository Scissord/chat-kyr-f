import { useSocketContext } from "@context";
import { Draggable } from "@hello-pangea/dnd";
import { useAppSelector } from "@hooks";
import { IconTrash, IconPin } from "@icons";
import { ICard } from "@interfaces";
import { RootState } from "@store/index";
import { getUser } from "@store/reducers/authSlice";
import { CSSProperties, FC, memo, useState } from "react";
import { useNavigate } from "react-router-dom";

const css = {
  container: `
    select-none p-2 bg-card dark:bg-dcard
    text-[13px] text-black dark:text-white
    relative z-10 overflow-hidden
    flex items-center gap-3 border border-slate-200
    dark:border-neutral-700 rounded shadow-lg
  `,
  delete: `
    absolute top-1 right-2 hover:cursor-pointer
  `,
};

type CardProps = {
  index: number;
  style: CSSProperties;
  data: ICard[];
  deleteCard: (card_id: string, column_id: string) => void;
  toggleFixCard: (card_id: string) => void;
};

const Card: FC<CardProps> = memo((props) => {
  const { index, style, data, deleteCard, toggleFixCard } = props;
  const navigate = useNavigate();
  const user = useAppSelector((state: RootState) => getUser(state));
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const { blockIds } = useSocketContext();

  const card = data[index];

  return (
    <Draggable
      index={index}
      draggableId={card.id}
      isDragDisabled={blockIds.includes(card?.id)}
    >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{ ...style, ...provided.draggableProps.style }}
          onClick={() => {
            if (user) {
              switch (+user.id) {
                case 7:
                  navigate("/chats", { state: { customer: card } });
                  break;
                case 43:
                  navigate("/chats", { state: { customer: card } });
                  break;
                case 45:
                  navigate("/chats", { state: { customer: card } });
                  break;
                default:
                  if (card?.manager_id === user?.id) {
                    navigate("/chats", { state: { customer: card } });
                  }
                  break;
              };
            };
          }}
          onMouseEnter={() => setIsEditable(true)}
          onMouseLeave={() => setIsEditable(false)}
        >
          <div className={css.container}>
            {isEditable && (
              <>
                <div
                  className='absolute top-1 left-1 cursor-pointer'
                  onClick={(e) => {
                  e.stopPropagation();
                  deleteCard(card?.id, card.manager_id);
                }}>
                  <IconTrash width='0.8rem' height='0.8rem'/>
                </div>
                <div
                  className='absolute bottom-1 left-1 cursor-pointer'
                  onClick={(e) => {
                  e.stopPropagation();
                  toggleFixCard(card?.id);
                }}>
                  <IconPin/>
                </div>
              </>

            )}
            <img
              src={card?.avatar || 'pics/default_avatar.png'}
              className='w-10 h-10 rounded-full border'
              alt="avatar"
            />
            <div className='flex flex-col w-full text-xs'>
              <div className='flex items-center justify-between w-full'>
                <p>{card?.order_id}</p>
                <p>{card?.time}</p>
              </div>
              <div className='flex items-center justify-between w-full'>
                <p className='font-bold'>
                  {card?.name?.length > 15? card?.name?.slice(0, 14) : card?.name}
                </p>
                <div className='ml-auto'>
                  <img
                    src={card?.path}
                    className='w-6'
                    alt="product"
                  />
                </div>
              </div>
              <div className='flex items-center mt-2'>
                <img
                  src={'pics/whatsapp_logo.webp'}
                  className='w-4 rounded-full'
                  alt="whatsapp"
                />
                {card?.text && <p className='rounded'>
                  {card?.text.length > 10 ? card.text.slice(0, 10) + '...' : card?.text}
                </p>}
                {card?.counter !== 0 && <p className='ml-auto text-[8px] w-3 h-3 bg-[#646dff] rounded-full text-white flex items-center justify-center'>
                  {card?.counter}
                </p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
});

export default Card;