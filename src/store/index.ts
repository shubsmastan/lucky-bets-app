import { Store } from '@tanstack/store';

export const store = new Store({
	isSidebarOpen: false,
});

export const setIsSidebarOpen = (isSidebarOpen: boolean) => {
	store.setState(state => {
		return {
			...state,
			isSidebarOpen,
		};
	});
};
