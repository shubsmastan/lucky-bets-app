'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { App } from '@/components/App';
import { queryClient } from '@/app/page';

type Props = {
	params: { type: string; id: string };
};

export default function Home({ params }: Props) {
	return (
		<QueryClientProvider client={queryClient}>
			<App type='markets' eventType={params.type} eventId={params.id} />
		</QueryClientProvider>
	);
}
