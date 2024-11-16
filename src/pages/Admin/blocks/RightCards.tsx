import { FC, useEffect, useState } from 'react'
import { useViewContext } from '@context';
import { IUser } from '@interfaces';
import axios from '@axios';
import LeftCard from './LeftCard/LeftCard';
import RightCard from './RightCard/RightCard';

const RightCards: FC = () => {
  const context = useViewContext();

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    await axios({
      method: 'GET',
      url: `/admin`,
    })
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch(() => {
        context?.notification.show('Ошибка при загруке пользователей', "error")
      })
  };

  return (
    <div className='h-full w-full flex items-start justify-between gap-3'>
      <LeftCard users={users} fetchUsers={fetchUsers}/>
      <RightCard users={users} fetchUsers={fetchUsers}/>
    </div>

  )
}

export default RightCards;
