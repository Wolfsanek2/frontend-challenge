import { Outlet } from 'react-router';
import { Header } from '../Header';
import styles from './Layout.module.scss';

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
