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
			state.events = action.payload;
		},
	},
});

export const { setEvents } = preferenceSlice.actions;

export default preferenceSlice.reducer;
