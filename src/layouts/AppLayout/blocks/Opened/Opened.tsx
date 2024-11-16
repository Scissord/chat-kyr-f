import { FC, RefObject } from 'react'
import OpenedSidebar from './OpenedSidebar';
import OpenedUserOptions from './OpenedUserOptions';
import { useAppDispatch } from '@hooks';
import { toggleSidebar } from '@store/reducers/sidebarSlice';

type OpenedProps = {
  menuOpenedButtonRef: RefObject<HTMLDivElement>;
  toggleMenu: () => void;
  isOpenMenu: boolean;
  handleLogOut: () => void;
};

const Opened: FC<OpenedProps> = (props) => {
  const {
    menuOpenedButtonRef,
    toggleMenu,
    isOpenMenu,
    handleLogOut
  } = props;

  const dispatch = useAppDispatch();

  return (
    <div
      className='w-full h-full'
      onMouseLeave={() => dispatch(toggleSidebar())}
    >
      <OpenedSidebar
        menuOpenedButtonRef={menuOpenedButtonRef}
        toggleMenu={() => toggleMenu()}
      />
      <OpenedUserOptions
        isOpenMenu={isOpenMenu}
        toggleMenu={() => toggleMenu()}
        menuOpenedButtonRef={menuOpenedButtonRef}
        handleLogOut={handleLogOut}
      />
    </div>
  );
};

export default Opened