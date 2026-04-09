import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { Layout } from '@/components';
import { Favorite, Home } from '@/pages';
import { store } from '@/store';

export const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="/favorite" element={<Favorite />} />
						<Route
							path="*"
							element={<Navigate to={'/'} replace />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};
