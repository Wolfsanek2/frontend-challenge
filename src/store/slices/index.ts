import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEYS } from '@/const';
import type { Cat, ID } from '@/types';

interface AppState {
	allCats: Cat[];
	favoriteCats: Cat[];
}

if (!localStorage.getItem(LOCAL_STORAGE_KEYS.favoriteCats)) {
	localStorage.setItem(LOCAL_STORAGE_KEYS.favoriteCats, JSON.stringify([]));
}

const initialState: AppState = {
	allCats: [],
	favoriteCats: JSON.parse(
		localStorage.getItem(LOCAL_STORAGE_KEYS.favoriteCats)!,
	),
};

const slice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		addAllCats(state, action: PayloadAction<Cat[]>) {
			state.allCats.push(...action.payload);
		},
		addCatToFavorites(state, action: PayloadAction<Cat>) {
			const catToFavorite = state.allCats.find(
				(cat) => cat.id === action.payload.id,
			);
			if (catToFavorite) {
				catToFavorite.isFavorite = true;
				state.favoriteCats.push(catToFavorite);
			}
		},
		removeCatFromFavorites(state, action: PayloadAction<ID>) {
			const id = action.payload;

			state.favoriteCats = state.favoriteCats.filter(
				(cat) => cat.id !== id,
			);

			const catInAll = state.allCats.find((cat) => cat.id === id);
			if (catInAll) {
				catInAll.isFavorite = false;
			}
		},
	},
	selectors: {
		allCats: (state) => state.allCats,
		favoriteCats: (state) => state.favoriteCats,
	},
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
export const appSelectors = slice.selectors;
