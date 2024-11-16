import { FC } from 'react';
import Customers from './Chat/Customers';
import Conversation from './Chat/Conversation';
import CustomerInfo from './Chat/CustomerInfo';

const Chat: FC = () => {
  return (
    <div className='flex flex-col sm:flex-row h-[100vh]'>
      <Customers/>
      <Conversation/>
      <CustomerInfo/>
    </div>
  )
}

export default Chat;
