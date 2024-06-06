'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { MarketCard } from '@/components/MarketsCard';
import { Loading } from '@/components/Loading';
import { RecordType } from '@/types';

type Props = {
	eventId?: string;
	type?: string;
};

export const MarketsList = ({ eventId, type }: Props) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['markets'],
		queryFn: async () => {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_URL}/api/events/${eventId}/`
			);
			const markets = data.markets;
			const { data: eventData } = await axios.get(
				`${process.env.NEXT_PUBLIC_URL}/api/${type}/`
			);
			const event = eventData.events.find(
				(event: RecordType) => event.id === eventId
			);
			return { markets, event };
		},
	});

	const markets = data?.markets;
	const event = data?.event;

	if (isLoading) {
		return (
			<>
				<h1 className='uppercase font-bold text-3xl pb-5'>Loading</h1>
				<Loading />
			</>
		);
	}

	if (isError) {
		return (
			<>
				<h1 className='uppercase font-bold text-3xl pb-5'>
					An error occured
				</h1>
				<p>Could not get markets data from Smarkets API.</p>
			</>
		);
	}

	const marketsList = markets.map((market: RecordType) => (
		<MarketCard key={market.id} type={type} market={market} />
	));

	return (
		<>
			<h1 className='uppercase font-bold text-3xl pb-5'>{event?.name}</h1>
			<ul className='flex flex-col gap-4'>{marketsList}</ul>
		</>
	);
};
