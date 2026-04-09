import { api } from '@/api';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { appReducer } from './slices';
import { appMiddleware } from './middleware';

export const rootReducer = combineReducers({
	app: appReducer,
	[api.reducerPath]: api.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware().concat(api.middleware, appMiddleware);
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
