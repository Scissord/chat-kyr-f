import { lazy } from 'react';
import { CW } from '@components';
import { IRoute } from '@interfaces';

const HomePage = lazy(() => import('@pages/Home'));
const UserPage = lazy(() => import('@pages/User'));
const ChatsPage = lazy(() => import('@pages/Chats'));
const AdminPage = lazy(() => import('@pages/Admin'));

const AppRoutes: IRoute[] = [
  {
		path: "/",
		element: CW(HomePage),
		layout: "app",
		title: "Talk&Call",
	},
  {
    path: "/users/:id",
		element: CW(UserPage),
		layout: "app",
		title: "User",
  },
  {
    path: "/chats",
		element: CW(ChatsPage),
		layout: "app",
		title: "Чаты",
  },
  {
    path: "/admin",
		element: CW(AdminPage),
		layout: "app",
		title: "Админ",
  },
];

export default AppRoutes;
