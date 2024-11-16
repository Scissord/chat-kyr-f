import { useViewContext } from '@context';
import { IUser } from '@interfaces';
import { FC } from 'react'
import DeleteUserModal from '../Modals/DeleteUserModal';

type RightCardProps = {
  users: IUser[];
  fetchUsers: () => void;
};

const RightCard: FC<RightCardProps> = ({ users, fetchUsers }) => {
  const context = useViewContext();

  const handleDeleteUserModal = (user_id: string, user_name: string) => {
    context?.modal.show({
      title: 'Удаление пользователя',
      children: <DeleteUserModal
        user_id={user_id}
        user_name={user_name}
        fetchUsers={fetchUsers}
      />
    })
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-red-500 to-rose-800 flex flex-col items-center justify-start gap-3 p-4 rounded-lg shadow-lg">
      <h1 className='text-xl text-white w-full'>Удаление</h1>
      <div className='w-full relative'>
        <input
          className='h-10 placeholder-white text-white rounded w-full border pl-3 text-sm'
          placeholder='Login...'
        />
        <div className='absolute right-4 top-3'>
          <IconSearch/>
        </div>
      </div>
      <div className='flex flex-col gap-2 text-white overflow-y-auto'>
        {users.map((user) => (
          <div onClick={() => handleDeleteUserModal(user.id, user.name)} key={user.id} className='cursor-pointer'>
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RightCard;

export const IconSearch: FC = () => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill='white'
      cursor="pointer"
      className="h-4 w-4 opacity-70"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
    </svg>
  );
};
