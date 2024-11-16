import { lazy } from 'react';
import { CW } from '@components';
import { IRoute } from '@interfaces';

const SignInPage = lazy(() => import('@pages/SignIn'));

const AuthRoutes: IRoute[] = [
	{
		path: "/login",
		element: CW(SignInPage),
		layout: "auth",
		title: "Sign In",
	},
]

export default AuthRoutes