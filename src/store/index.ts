import { configureStore } from '@reduxjs/toolkit';
import preferenceReducer from './preferenceSlice';
import dataReducer from './dataSlice';

export const store = configureStore({
	reducer: {
		preference: preferenceReducer,
		data: dataReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
