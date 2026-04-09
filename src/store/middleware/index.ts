import type { Middleware } from 'redux';
import { appActions } from '../slices';
import { LOCAL_STORAGE_KEYS } from '@/const';
import type { Cat } from '@/types';
import type { RootState } from '..';

export const appMiddleware: Middleware<unknown, RootState> =
	() => (next) => (action) => {
		if (appActions.addCatToFavorites.match(action)) {
			const favoriteCats = JSON.parse(
				localStorage.getItem(LOCAL_STORAGE_KEYS.favoriteCats)!,
			) as Cat[];
			favoriteCats.push({ ...action.payload, isFavorite: true });
			localStorage.setItem(
				LOCAL_STORAGE_KEYS.favoriteCats,
				JSON.stringify(favoriteCats),
			);
		}
		if (appActions.removeCatFromFavorites.match(action)) {
			const favoriteCats = JSON.parse(
				localStorage.getItem(LOCAL_STORAGE_KEYS.favoriteCats)!,
			) as Cat[];
			localStorage.setItem(
				LOCAL_STORAGE_KEYS.favoriteCats,
				JSON.stringify(
					favoriteCats.filter((cat) => cat.id !== action.payload),
				),
			);
		}

		next(action);
	};
