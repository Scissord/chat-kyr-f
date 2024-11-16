import { FC } from 'react';
import styles from './SideNavbarLogo.module.scss';

type SideNavbarLogo = {
	label: string;
  onClick: () => void;
}

export const SideNavbarLogo: FC<SideNavbarLogo> = (props) => {
	const { label, onClick } = props;

	return (
		<div className={styles.container} onClick={onClick}>
			<div className={styles.wrap}>
				<div className={styles.label}>
					{label}
				</div>
			</div>
		</div>
	)
}
