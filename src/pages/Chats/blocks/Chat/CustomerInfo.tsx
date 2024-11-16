import { useChats, useViewContext } from '@context';
import { FC, useEffect, useState } from 'react'
import { Loader } from '@ui';
import Certificates from './CustomerInfo/Certificates';
// import Tags from './CustomerInfo/Tags';
import Responsible from './CustomerInfo/Responsible';
import axios from '@axios';
import { ICustomer, IUser } from '@interfaces';

const ConversationInfo: FC = () => {
  const { customer, setCustomer, setFile, setMessage, fetchConversation } = useChats();
  const context = useViewContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<IUser[] | []>([]);
  const [newManager, setNewManager] = useState<string>('disabled');
  const [chats, setChats] = useState<any>([]);

  useEffect(() => {
    if(customer && customer.id) {
      fetchInfo(customer.id);
    }
  }, [customer]);

  const fetchInfo = async (customer_id: string) => {
    await axios({
      method: 'POST',
      url: '/users',
      data: {
        customer_id
      }
    }).then((res) => {
      setUsers(res.data.users);
      setChats(res.data.chats)
    }).catch(() => {
      context?.notification.show('Ошибка при загрузке пользователей', 'error');
    });
  }

  const handleSaveNewManager = async (customer_id: string) => {
    if(newManager === 'disabled') {
      context?.notification.show('Выберите ответственного!', 'error');
      return;
    }
    const manager_name =  users.find((user) => +user.id === +newManager)?.name;
    await axios({
      method: 'PATCH',
      url: `/cards/${customer_id}/move`,
      data: {
        manager_id: newManager
      }
    }).then(() => {
      if (manager_name && customer && customer.id) {
        setCustomer({ ...customer, manager_name });
      }
      context?.notification.show('Ответственный успешно изменен', 'success');
    }).catch(() => {
      context?.notification.show('Ошибка при смене ответственного', 'error');
    });
  };

  // const handleOpenNewChat = async (customer: ICustomer, newCustomerId: string) => {
  //   setCustomer(customer);
  //   fetchConversation(newCustomerId);
  // };

  return (
    <div className='h-full w-full sm:w-1/4 border-r border-l border-slate-300 px-4 overflow-y-auto'>
      {customer ? (
        <div className="w-full flex flex-col gap-3 items-center">
          <div className='flex flex-col items-center w-full pt-3'>
            <img
              src={customer?.avatar ? customer?.avatar : 'pics/default_avatar.png'}
              className='h-16 w-16 rounded-full border border-slate-300'
            />
            <p className='text-xl text-black dark:text-white'>
              {customer?.name ? customer?.name : '...'}
            </p>
          </div>
          <div className='flex flex-col gap-2 border-t items-start border-slate-300 w-full px-2 py-2'>
            {loading ? <Loader className='loading-lg'/> : (
              <Certificates
                setFile={setFile}
                setLoading={setLoading}
                setMessage={setMessage}
              />
            )}
          </div>
          {/* <div className='flex flex-col gap-2 items-start border-t border-slate-300 w-full px-2 py-2'>
            <Tags/>
          </div> */}
          <div className='flex flex-col gap-2 items-start border-t border-slate-300 w-full px-2 py-2'>
            <Responsible manager={customer?.manager_name ? customer.manager_name : "Нет"}/>
            <select
              value={newManager}
              className='h-8 border border-black dark:border-white rounded pl-3 text-sm text-black dark:text-white'
              onChange={(e) => setNewManager(e.target.value)}
            >
              {users?.map((user) => (
                <option
                  key={user.id}
                  value={user.id}
                  disabled={user.id === 'disabled'}
                >
                  {user.name}
                </option>
              ))}
            </select>
            <button
              onClick={() => handleSaveNewManager(customer?.id)}
              className='btn btn-success text-white'
            >
              Сохранить
            </button>
          </div>
          <div className='flex flex-col gap-2 items-start border-t border-slate-300 w-full px-2 py-2 text-black'>
            <h1 className='font-bold text-xl dark:text-white'>Чаты</h1>
            {chats.length > 0 && chats.map((chat: any, index: number) => (
              <div
                key={chat?.order_id}
                // onClick={() => handleOpenNewChat(customer, chat?.id)}
                className='text-sm text-black dark:text-white'
              >
                {index + 1}.
                {chat?.order_id}
                {chat?.order_id === customer?.order_id && (
                  <span className='text-xs ml-2 text-gray-400'>Текущий</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='h-full flex flex-col items-center justify-center'>
          Выберите чат
        </div>
      )}
    </div>
  )
}

export default ConversationInfo