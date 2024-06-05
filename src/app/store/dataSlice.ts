import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PreferenceSlice {
	events: Record<string, string | number | boolean | null>[];
}

const initialState: PreferenceSlice = {
	events: [],
};

export const preferenceSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		setEvents: (state, action: PayloadAction<any>) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.events = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setEvents } = preferenceSlice.actions;

export default preferenceSlice.reducer;
