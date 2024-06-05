'use client';

import { RootState } from '@/store';
import { RecordType, setEvents } from '@/store/dataSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EventCard } from './EventCard';
import { Loading } from './Loading';

type Props = {
	type: string;
	name: string;
};

export const EventList = ({ type, name }: Props) => {
	const events = useSelector((state: RootState) => state.data.events);

	const dispatch = useDispatch();

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const { data } = await axios.get(
					`${process.env.NEXT_PUBLIC_URL}/api/${type}/`
				);
				console.log(data);
				dispatch(setEvents(data.events));
			} catch (err) {
				console.log(err);
				setError('Could not get event data from Smarkets API.');
			} finally {
				setLoading(false);
			}
		})();
	}, [type, dispatch]);

	if (loading) {
		return (
			<>
				<h1 className='uppercase font-bold text-3xl pb-5'>{name}</h1>
				<Loading />
			</>
		);
	}

	if (error) {
		return (
			<>
				<h1 className='uppercase font-bold text-3xl pb-5'>{name}</h1>
				<p>{error}</p>
			</>
		);
	}

	const eventsList = events.map((event: RecordType) => (
		<EventCard type={type} key={event.id} event={event} />
	));

	return (
		<>
			<h1 className='uppercase font-bold text-3xl pb-5'>{name}</h1>
			<ul className='flex flex-col gap-4'>{eventsList}</ul>
		</>
	);
};
