import { FC, useContext, useRef, useState } from 'react';
import { useAppSelector, useNavigate } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';
import { useAppDispatch } from '@hooks';
import { ViewContext } from '@context';
import { useLogoutMutation } from '@store/api/authApi';
import { IError } from '@interfaces';
import { localLogout } from '@store/reducers/authSlice';
import { selectSidebar } from '@store/reducers/sidebarSlice';
import Closed from './blocks/Closed/Closed';
import Opened from './blocks/Opened/Opened';

type AppLayoutProps = {
  children: FC;
};

const css = {
  container: `
    flex items-center
    justify-center
    relative min-h-[100vh]
  `,
  sidebar: `
    h-[100vh] hidden lg:flex
    flex-col items-center rounded-tr-sm
    rounded-br-sm transition-width
    duration-300 fixed top-0 left-0 z-50
    bg-center bg-cover
  `,
  displayComponent: `
    min-h-[100vh] w-[95%] ml-auto
    bg-neutral-200 dark:bg-indigo-950
  `,
  opened: `
    w-[16%]
  `,
  closed: `
    w-[5%]
  `
};

const sidebar = {
  backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(to bottom, rgba(29, 78, 216, 0.7), rgba(126, 34, 206, 0.7), rgba(49, 46, 129, 0.7), rgba(220, 38, 38, 0.7)), url(pics/sidebar-bg.jpg)',
};

export const AppLayout: FC<AppLayoutProps> = ({ children: DisplayComponent }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const context = useContext(ViewContext);

  const theme = useAppSelector(selectTheme);
  const isSidebarOpen = useAppSelector(selectSidebar);

  const menuOpenedButtonRef = useRef<HTMLDivElement>(null);

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const [logout] = useLogoutMutation();

  const handleLogOut = async () => {
    try {
      await logout({}).unwrap();
      dispatch(localLogout());
      navigate("/login");
    } catch (error) {
      const typedError = error as IError;
      console.error("Signup failed:", typedError);
      console.error("Signup failed:", error);
      context?.notification.show(typedError?.data?.error || typedError.message || 'An error occurred', 'error');
    };
  };

  if (!DisplayComponent) return false;

  return (
    <div className={`${css.container} ${theme === 'dark' ? 'dark' : ''}`}>
      <div
        style={sidebar}
        className={`${css.sidebar} ${isSidebarOpen ? css.opened : css.closed}`}
      >
        {!isSidebarOpen ? (
          <Closed/>
        ) : (
          <Opened
            menuOpenedButtonRef={menuOpenedButtonRef}
            toggleMenu={() => setIsOpenMenu(!isOpenMenu)}
            isOpenMenu={isOpenMenu}
            handleLogOut={handleLogOut}
          />
        )}
      </div>

      <div className={css.displayComponent}>
        <DisplayComponent />
      </div>
    </div>
  );
};
