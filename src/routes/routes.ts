import AppRoutes from './app';
import AuthRoutes from './auth';
import { IRoute } from '@interfaces';

const routes: IRoute[] = [
	...AuthRoutes,
	...AppRoutes,
]

export default routes
