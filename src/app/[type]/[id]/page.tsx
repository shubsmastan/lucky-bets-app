'use client';

import { Provider } from 'react-redux';

import { store } from '@/store';

import { App } from '@/components/App';

type Props = {
	params: { type: string; id: string };
};

export default function Home({ params }: Props) {
	return (
		<Provider store={store}>
			<App type='markets' eventType={params.type} eventId={params.id} />
		</Provider>
	);
}
