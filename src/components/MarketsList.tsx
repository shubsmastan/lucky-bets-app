'use client';

import { RootState } from '@/store';
import { RecordType, setMarkets } from '@/store/dataSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MarketCard } from './MarketsCard';
import { Loading } from './Loading';

type Props = {
	eventId?: string;
	type?: string;
};

export const MarketsList = ({ eventId, type }: Props) => {
	const markets = useSelector((state: RootState) => state.data.markets);

	const dispatch = useDispatch();

	const [event, setEvent] = useState<RecordType>();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const { data } = await axios.get(
					`${process.env.NEXT_PUBLIC_URL}/api/events/${eventId}`
				);
				const { data: eventData } = await axios.get(
					`${process.env.NEXT_PUBLIC_URL}/api/${type}/`
				);
				const evt = eventData.events.find(
					(event: RecordType) => event.id === eventId
				);
				setEvent(evt);
				console.log(data);
				dispatch(setMarkets(data.markets));
			} catch (err) {
				console.log(err);
				setError('Could not get markets data from Smarkets API.');
			} finally {
				setLoading(false);
			}
		})();
	}, [eventId, dispatch, type]);

	if (loading) {
		return (
			<>
				<h1 className='uppercase font-bold text-3xl pb-5'>Loading</h1>
				<Loading />
			</>
		);
	}

	if (error) {
		return (
			<>
				<h1 className='uppercase font-bold text-3xl pb-5'>
					An error occured
				</h1>
				<p>{error}</p>
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
