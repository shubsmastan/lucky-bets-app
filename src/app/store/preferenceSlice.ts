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
		toggle: state => {
			state.isSidebarOpen = !state.isSidebarOpen;
		},
	},
});

export const { toggle } = preferenceSlice.actions;

export default preferenceSlice.reducer;
