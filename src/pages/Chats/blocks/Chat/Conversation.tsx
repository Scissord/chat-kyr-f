import ChatTitle from './Conversation/ChatTitle';
import Chat from './Conversation/Chat';
import ChatFooter from './Conversation/ChatFooter';
import { useChats } from '@context';

const Conversation = () => {
  const { customer } = useChats();

  return (
    <div className='flex flex-col justify-between sm:w-1/2 overflow-y-auto'>
      {customer ? (
        <>
          <ChatTitle/>
          <Chat/>
          <ChatFooter/>
        </>
      ) : (
        <div className='h-full flex flex-col items-center justify-center pb-10'>
          <p className={`font-bold text-2xl text-black dark:text-white`}>
            Пожалуйста выберите чат
          </p>
        </div>
      )}
    </div>
  )
}

export default Conversation