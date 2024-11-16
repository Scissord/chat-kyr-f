import { FC } from 'react';

export type IRoute = {
	path: string | "";
	element: FC;
	layout: string | "",
	title: string | "",
}