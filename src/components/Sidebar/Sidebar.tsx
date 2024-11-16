import { FC } from 'react';
import { SideNavbarLogo } from '@components';
import { useNavigate } from '@hooks';
import styles from './Sidebar.module.scss';

export const Sidebar: FC = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<SideNavbarLogo label="Constructor" onClick={() => navigate('/')}/>
		</div>
	)
}

