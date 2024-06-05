import { useSelector } from 'react-redux';

import { RootState } from '@/store';

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
			<main className='flex pt-12 relative h-full bg-zinc-50 dark:bg-zinc-950'>
				{isSidebarOpen && <Sidebar />}
				<Dashboard />
			</main>
		</>
	);
};
