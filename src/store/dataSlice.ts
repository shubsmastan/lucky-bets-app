import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type RecordType = Record<string, string | number | boolean | null> & {
	id: string;
};

export type PreferenceSlice = {
	events: RecordType[];
	markets: RecordType[];
};

const initialState: PreferenceSlice = {
	events: [],
	markets: [],
};

export const preferenceSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setEvents: (state, action: PayloadAction<any>) => {
			state.events = action.payload;
		},
		setMarkets: (state, action: PayloadAction<any>) => {
			state.markets = action.payload;
		},
	},
});

export const { setEvents, setMarkets } = preferenceSlice.actions;

export default preferenceSlice.reducer;
