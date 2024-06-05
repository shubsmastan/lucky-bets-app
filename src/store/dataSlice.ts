import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Event = Record<string, string | number | boolean | null> & {
	id: string;
};

export type PreferenceSlice = {
	events: Event[];
};

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
