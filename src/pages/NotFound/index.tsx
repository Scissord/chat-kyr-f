import { FC } from 'react';
import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
	return (
		<div className={styles.container}>
			<img alt="404" src='pics/404.svg' width="100%" height="100%"/>
		</div>
	)
}
