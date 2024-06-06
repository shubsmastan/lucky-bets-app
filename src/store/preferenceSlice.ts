import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PreferenceSlice {
	isSidebarOpen: boolean;
}

const initialState: PreferenceSlice = {
	isSidebarOpen: true,
};

export const preferenceSlice = createSlice({
	name: 'preference',
	initialState,
	reducers: {
		setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
			state.isSidebarOpen = action.payload;
		},
	},
});

export const { setIsSidebarOpen } = preferenceSlice.actions;

export default preferenceSlice.reducer;
