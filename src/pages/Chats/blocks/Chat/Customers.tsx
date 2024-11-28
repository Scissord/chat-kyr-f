import { FC } from 'react';
import TopCustomers from './Customers/TopCustomers';
import MiddleCustomers from './Customers/MiddleCustomers';
import FloatingButton from './Customers/FloatingButton';

const Conversations: FC = () => {

  return (
    <div
      className={`
        flex flex-col h-full w-full sm:w-1/4
        overflow-y-auto border-l border-r
        border-slate-300 relative
      `}
    >
      <TopCustomers/>
      <MiddleCustomers/>
      <FloatingButton />
    </div>
  )
}

export default Conversations;
