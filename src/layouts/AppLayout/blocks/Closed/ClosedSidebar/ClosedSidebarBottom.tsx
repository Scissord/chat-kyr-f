import { FC } from 'react';
import { useAppSelector } from '@hooks';
import { ColorModeButton } from '@components';
import { getUser } from '@store/reducers/authSlice';
import { RootState } from '@store/index';

const css = {
  bottom: `
    mt-auto flex flex-col gap-3
  `,
  icon: `
    flex items-center justify-center
    hover:rounded-lg p-2 cursor-pointer
    hover:bg-gray-200 dark:hover:bg-gray-700
    transition-transform duration-200
    ease-in-out transform active:scale-95
  `,
  avatar: `
    select-none w-[1.4em] h-[1.4em] rounded-full
  `
};

const ClosedSidebarBottom: FC = () => {
  const user = useAppSelector((state: RootState) => getUser(state));

  return (
    <div className={css.bottom}>
      <div className={css.icon}>
        <ColorModeButton />
      </div>
      <div className={css.icon}>
        <img
          src={user?.avatar ? user?.avatar : 'pics/default_avatar.png'}
          className={css.avatar}
          alt="avatar"
        />
      </div>
    </div>
  )
}

export default ClosedSidebarBottom;
