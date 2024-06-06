import { Store } from '@tanstack/store';

export const store = new Store({
	isSidebarOpen: false,
	activeTab: '',
});

export const setIsSidebarOpen = (isSidebarOpen: boolean) => {
	store.setState(state => {
		return {
			...state,
			isSidebarOpen,
		};
	});
};

export const setActiveTab = (activeTab: string) => {
	store.setState(state => {
		return {
			...state,
			activeTab,
		};
	});
};
