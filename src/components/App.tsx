import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';

import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from './Dashboard';

export const App = () => {
	const isSidebarOpen = useSelector(
		(state: RootState) => state.preference.isSidebarOpen
	);

	return (
		<>
			<Header />
			<main className='flex h-[calc(100%-3rem)] pt-12 relative'>
				{isSidebarOpen && <Sidebar />}
				<Dashboard />
			</main>
		</>
	);
};
