'use client';

import { useEffect } from 'react';
import { useStore } from '@tanstack/react-store';
import { useWindowSize } from '@uidotdev/usehooks';

import { store, setIsSidebarOpen } from '@/store';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';

type Props = {
	type: string;
	eventId?: string;
	eventType?: string;
};

export const App = ({ type, eventId, eventType }: Props) => {
	const isSidebarOpen = useStore(store, state => state.isSidebarOpen);

	const { width } = useWindowSize();

	useEffect(() => {
		if (width && width > 1024) setIsSidebarOpen(true);
		else setIsSidebarOpen(false);
	}, [width]);

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
