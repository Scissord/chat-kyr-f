import { FC, useEffect, useState } from 'react'
import { useViewContext } from '@context';
import { useAppSelector } from '@hooks';
import { RootState } from '@store/index';
import { getUser } from '@store/reducers/authSlice';
import axios from '@axios';

type ChangeUserModalProps = {
  user: any;
  fetchUsers: () => void;
};

type UserInfo = {
  name: string;
  role: string;
  password?: string;
};

const ChangeUserModal: FC<ChangeUserModalProps> = ({ user, fetchUsers }) => {
  const context = useViewContext();
  // const theme = useAppSelector(selectTheme);
  const auth = useAppSelector((state: RootState) => getUser(state));

  const [roles, setRoles] = useState([
    // { role: "1", label: "Менеджер отдела продал call-center" },
    // { role: "2", label: "Руководитель отдела продаж call-center" },
    { role: "3", label: "Оператор ПД" },
    { role: "4", label: "Оператор КД" },
    { role: "5", label: "РГ ПД" },
    { role: "6", label: "РГ КД" },
    { role: "7", label: "Администратор" },
    { role: "8", label: "Баер" },
  ]);

  const [localUser, setLocalUser] = useState({
    id: user.id,
    name: user.name,
    password: "",
    role: user.role,
  });

  useEffect(() => {
    let filteredRoles = roles;

    if (auth && +auth.role.id === 5) {
      filteredRoles = roles.filter((r) => +r.role === 3);
    }
    if (auth && +auth.role.id === 6) {
      filteredRoles = roles.filter((r) => +r.role === 4);
    }

    setRoles(filteredRoles);
  }, [auth]);

  const handleUpdateUser = async () => {
    if (!localUser?.id || localUser?.name.length < 3 || localUser?.role === null || localUser?.role === undefined) {
      context?.notification.show("Заполните все поля / Минимум: пароль - 5 символов, логин - 3", "error");
      return;
    };

    const info: UserInfo = {
      name: localUser?.name,
      role: localUser?.role
    };

    if(localUser?.password !== "") {
      info.password = localUser?.password
    };

    await axios({
      method: 'PATCH',
      url: `/admin/${localUser?.id}`,
      data: info
    })
      .then(() => {
        context?.notification.show("Пользователь успешно обновлен!", "success");
        fetchUsers();
        context?.modal.hide();
      })
      .catch((err) => context?.notification.show(err.response.data.detail, "error"))
  };

  return (
    <div className='grid grid-cols-2 gap-3 text-black'>
      <p className='font-bold'>Логин</p>
      <input
        type='text'
        value={localUser.name}
        onChange={(e) => setLocalUser({ ...localUser, name: e.target.value })}
        placeholder='...'
        className='h-8 border border-black rounded pl-3 text-sm'
      />
      <p className='font-bold'>Пароль</p>
      <input
        type='text'
        value={localUser.password}
        onChange={(e) => setLocalUser({ ...localUser, password: e.target.value })}
        placeholder='...'
        className='h-8 border border-black rounded pl-3 text-sm'
      />
      <p className='font-bold'>Роль</p>
      <select
        value={localUser.role}
        className='h-8 border border-black rounded pl-3 text-sm'
        onChange={(e) => setLocalUser({ ...localUser, role: e.target.value })}
      >
        {roles.map((option) => (
          <option
            key={option.role}
            value={option.role}
          >
            {option.label}
          </option>
        ))}
      </select>
      <button
        onClick={handleUpdateUser}
        className='btn btn-success text-white col-span-2'
      >
        Обновить
      </button>
    </div>
  );
};

export default ChangeUserModal;
