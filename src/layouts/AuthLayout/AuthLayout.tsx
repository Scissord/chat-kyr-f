import { FC } from 'react';
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';

type AuthLayoutProps = {
	children: FC
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children: DisplayComponent }) => {
	const theme = useAppSelector(selectTheme);

	if (!DisplayComponent) return false;
	return (
		<div className={theme === 'dark' ? 'dark' : ''}>
			<div className='min-h-[100vh] bg-neutral-200 dark:bg-indigo-950 flex items-center justify-center'>
        <DisplayComponent/>
			</div>
		</div>
	)
}
