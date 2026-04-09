import { Outlet } from 'react-router';
import styles from './Layout.module.scss';
import { Header } from '@/components';

export const Layout = () => {
	return (
		<>
			<Header className={`${styles['layout__header']}`} />
			<main>
				<Outlet />
			</main>
		</>
	);
};
