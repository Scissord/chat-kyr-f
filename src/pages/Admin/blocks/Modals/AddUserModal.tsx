import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '@hooks';
import { RootState } from '@store/index';
import { getUser } from '@store/reducers/authSlice';
// import { selectTheme } from '@store/reducers/themeSlice';
import { useViewContext } from '@context';
import axios from '@axios';

type CreateUserProps = {
  fetchUsers: () => void;
};

const AddUserModal: FC<CreateUserProps> = ({ fetchUsers }) => {
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
    // { role: "7", label: "Администратор" },
    { role: "8", label: "Баер" },
    { role: "9", label: "Вл" },
  ]);

  const [user, setUser] = useState({
    id: null,
    name: "",
    password: "",
    role: roles[0].role,
  });

  useEffect(() => {
    let filteredRoles = roles;

    // if (auth && +auth.role.id === 2) {
    //   filteredRoles = roles.filter((r) => +r.role === 1);
    // }
    if (auth && +auth.role.id === 5) {
      filteredRoles = roles.filter((r) => +r.role === 3);
    }
    if (auth && +auth.role.id === 6) {
      filteredRoles = roles.filter((r) => +r.role === 4);
    }
    if (auth && +auth.role.id === 10) {
      filteredRoles = roles.filter((r) => +r.role === 9);
    }

    setRoles(filteredRoles);

    if (filteredRoles.length > 0) {
      setUser((prev) => ({
        ...prev,
        role: filteredRoles[0].role,
      }));
    }
  }, [auth]);

  const handleCreateUser = async () => {
    if (user?.name.length < 3 || user?.password.length < 5 || user?.role === null) {
      context?.notification.show("Логин больше 3, пароль больше 4 символов!", "error");
      return;
    }

    await axios({
      method: 'POST',
      url: `/admin`,
      data: {
        name: user?.name,
        password: user?.password,
        role: user?.role
      }
    })
      .then(() => {
        context?.notification.show("Пользователь успешно создан!", "success");
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
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        placeholder='...'
        className='h-8 border border-black rounded pl-3 text-sm'
      />
      <p className='font-bold'>Пароль</p>
      <input
        type='text'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder='...'
        className='h-8 border border-black rounded pl-3 text-sm'
      />
      <p className='font-bold'>Роль</p>
      <select
        className='h-8 border border-black rounded pl-3 text-sm'
        onChange={(e) => setUser({ ...user, role: e.target.value })}
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
        onClick={handleCreateUser}
        className='btn btn-success text-white col-span-2'
      >
        Добавить
      </button>
    </div>
  )
}

export default AddUserModal;
