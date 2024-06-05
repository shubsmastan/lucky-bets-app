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
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.isSidebarOpen = !state.isSidebarOpen;
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggle } = preferenceSlice.actions;

export default preferenceSlice.reducer;
