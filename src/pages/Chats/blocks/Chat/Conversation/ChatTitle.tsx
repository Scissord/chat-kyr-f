import { FC } from 'react';
import { useChats } from '@context';
import { IconSync } from '@icons';

const ChatTitle: FC = () => {
  const { customer, handleSyncChats } = useChats();

  return (
    <div className='flex items-center justify-between px-6 py-4 border-b border-slate-300'>
      <div className={`flex items-center gap-3 text-black dark:text-white`}>
        <img
          src={customer?.avatar ? customer?.avatar : 'pics/default_avatar.png'}
          className='h-12 w-12 rounded-full border border-slate-300'
        />
        <div className='flex flex-col'>
          <p className='text-lg font-bold'>{customer?.name}</p>
          <p>{customer?.order_id}</p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-black dark:text-white text-sm'>Синхронизация - </p>
        <div
          onClick={() => handleSyncChats(customer?.id)}
          className='p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg border-2 border-black dark:border-white cursor-pointer'
        >
          <IconSync/>
        </div>
      </div>
    </div>
  )
}

export default ChatTitle;
