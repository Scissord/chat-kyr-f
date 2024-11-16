import { FC } from 'react'
import { useViewContext } from '@context';
import axios from '@axios';

type DeleteUserModalProps = {
  user_id: string;
  user_name: string;
  fetchUsers: () => void;
}

const DeleteUserModal: FC<DeleteUserModalProps> = (props) => {
  const { user_id, user_name, fetchUsers } = props;

  const context = useViewContext();

  const handleDeleteUser = async () => {
    const confirm = window.confirm('Вы уверены?')
    if(!confirm) return;

    await axios({
      method: 'DELETE',
      url: `/admin/${user_id}`,
    })
      .then(() => {
        context?.notification.show("Пользователь успешно удален!", "success");
        fetchUsers();
        context?.modal.hide();
      })
      .catch((err) => context?.notification.show(err.response.data.detail, "error"))
  };

  return (
    <div className='grid grid-cols-2 text-black'>
      <p className='font-bold'>{user_name}</p>
      <button
        onClick={handleDeleteUser}
        className='btn btn-error text-white'
      >
        Удалить
      </button>
    </div>
  );
};

export default DeleteUserModal;
