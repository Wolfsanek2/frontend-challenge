import { HashRouter, Navigate, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { Layout } from '@/components';
import { Favorite, Home } from '@/pages';
import { store } from '@/store';
import { PAGE_URLS } from '@/const';

export const App = () => {
	return (
		<Provider store={store}>
			<HashRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path={PAGE_URLS.home} element={<Home />} />
						<Route
							path={PAGE_URLS.favorite}
							element={<Favorite />}
						/>
						<Route
							path="*"
							element={<Navigate to={PAGE_URLS.home} replace />}
						/>
					</Route>
				</Routes>
			</HashRouter>
		</Provider>
	);
};
