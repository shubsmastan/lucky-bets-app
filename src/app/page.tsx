'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { App } from '@/components/App';

export const queryClient = new QueryClient();

export default function Home() {
	return (
		<QueryClientProvider client={queryClient}>
			<App type='home' />
		</QueryClientProvider>
	);
}
