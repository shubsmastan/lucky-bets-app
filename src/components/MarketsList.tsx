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
		queryKey: ['markets', eventId],
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
			for (let i = 0; i < markets.length; i++) {
				const { data: contractData } = await axios.get(
					`${process.env.NEXT_PUBLIC_URL}/api/markets/${markets[i].id}/`
				);
				const contracts: RecordType[] = contractData.contracts;
				markets[i].contracts = contracts;
			}

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

	const marketsList = markets.map((market: any) => (
		<MarketCard
			key={market.id}
			market={market}
			contracts={market.contracts}
		/>
	));

	// markets.forEach((market: any) => {
	// 	console.log(market.contracts);
	// });

	return (
		<>
			<h1 className='uppercase font-bold text-3xl pb-5'>{event?.name}</h1>
			<ul className='flex flex-col gap-4'>{marketsList}</ul>
		</>
	);
};
