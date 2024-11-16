import { FC } from 'react';
import styles from './ErrorLayout.module.scss';

type LayoutProps = {
	display: FC
}

export const ErrorLayout: FC<LayoutProps> = ({ display: DisplayComponent }) => {
	if (!DisplayComponent) return false;

	return (
		<div className={styles.container}>
			<div className={styles.page}>
				<DisplayComponent />
			</div>
		</div>
	)
}
