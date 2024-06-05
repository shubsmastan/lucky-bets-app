import { useSelector } from 'react-redux';

import { RootState } from '@/store';

import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';

type Props = {
	type: string;
	eventId?: string;
};

export const App = ({ type, eventId }: Props) => {
	const isSidebarOpen = useSelector(
		(state: RootState) => state.preference.isSidebarOpen
	);

	return (
		<>
			<Header />
			<main className='flex pt-12 relative h-full bg-zinc-50 dark:bg-zinc-950'>
				{isSidebarOpen && <Sidebar />}
				<Dashboard type={type} eventId={eventId} />
			</main>
		</>
	);
};
