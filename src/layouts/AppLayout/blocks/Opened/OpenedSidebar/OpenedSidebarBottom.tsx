import { FC, RefObject } from 'react'
import { motion, Variants } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@hooks';
import { getUser } from '@store/reducers/authSlice';
import { toggleColorMode } from '@store/reducers/themeSlice';
import { ColorModeButton } from '@components';

type OpenedSidebarBottomProps = {
  variants: Variants;
  menuOpenedButtonRef: RefObject<HTMLDivElement>;
  toggleMenu: () => void;
};

const css = {
  bottom: `
    mt-auto flex flex-col gap-3 w-full px-2
  `,
  icon: `
    flex items-center gap-3
    hover:rounded-lg p-2
    hover:bg-gray-100
    hover:bg-opacity-50
    cursor-pointer
  `,
  label: `
    text-[13px] select-none text-white
  `,
  avatar: `
    w-[1.4em] h-[1.4em] rounded-full
  `
};

const OpenedSidebarBottom: FC<OpenedSidebarBottomProps> = (props) => {
  const { variants, menuOpenedButtonRef, toggleMenu } = props;

  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);

  return (
    <div className={css.bottom}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.1 }}
        onClick={() => dispatch(toggleColorMode())}
        className={css.icon}
        whileTap={{ scale: 0.95 }}
      >
        <ColorModeButton />
        <p className={css.label}>Тема</p>
      </motion.div>

      <motion.div
        ref={menuOpenedButtonRef}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.1 }}
        onClick={() => toggleMenu()}
        className={css.icon}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={user?.avatar ? user?.avatar : 'pics/default_avatar.png'}
          className={css.avatar}
          alt='avatar'
        />
        <p className={css.label}>
          {user && user?.name?.length > 20 ? `${user?.name.slice(0, 20)}...` : user?.name}
        </p>
      </motion.div>
    </div>
  )
}

export default OpenedSidebarBottom