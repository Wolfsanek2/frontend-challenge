import { useLocation } from 'react-router';
import styles from './Header.module.scss';
import { HeaderLink } from '@/components';
import { PAGE_URLS } from '@/const';

interface HeaderProps {
	className?: string;
}

export const Header = ({ className }: HeaderProps) => {
	const { pathname } = useLocation();
	return (
		<header className={`${className} ${styles['header']}`}>
			<HeaderLink
				className={styles['header__link']}
				to={PAGE_URLS.home}
				text="Все котики"
				isActive={pathname === PAGE_URLS.home}
			/>
			<HeaderLink
				className={styles['header__link']}
				to={PAGE_URLS.favorite}
				text="Любимые котики"
				isActive={pathname === PAGE_URLS.favorite}
			/>
		</header>
	);
};
