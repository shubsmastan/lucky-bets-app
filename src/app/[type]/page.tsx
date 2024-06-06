'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { App } from '@/components/App';
import { queryClient } from '@/app/page';

type Props = {
	params: { type: string };
};

export default function Home({ params }: Props) {
	return (
		<QueryClientProvider client={queryClient}>
			<App type={params.type} />
		</QueryClientProvider>
	);
}
