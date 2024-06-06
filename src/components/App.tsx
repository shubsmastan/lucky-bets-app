import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from '@uidotdev/usehooks';

import { RootState } from '@/store';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { setIsSidebarOpen } from '@/store/preferenceSlice';

type Props = {
	type: string;
	eventId?: string;
	eventType?: string;
};

export const App = ({ type, eventId, eventType }: Props) => {
	const isSidebarOpen = useSelector(
		(state: RootState) => state.preference.isSidebarOpen
	);

	const dispatch = useDispatch();

	const { width } = useWindowSize();

	useEffect(() => {
		if (width && width > 1024) dispatch(setIsSidebarOpen(true));
		else dispatch(setIsSidebarOpen(false));
	}, [width, dispatch]);

	return (
		<>
			<Header />
			<main className='flex pt-12 relative min-h-full bg-zinc-50 dark:bg-zinc-950'>
				{isSidebarOpen && <Sidebar />}
				<Dashboard
					type={type}
					eventId={eventId}
					eventType={eventType}
				/>
			</main>
		</>
	);
};
