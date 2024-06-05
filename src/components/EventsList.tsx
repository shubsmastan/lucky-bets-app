'use client';

import { RootState } from '@/store';
import { Event, setEvents } from '@/store/dataSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EventCard } from './EventCard';

type Props = {
	type: string;
	name: string;
};

export const EventList = ({ type, name }: Props) => {
	const events = useSelector((state: RootState) => state.data.events);
	const isSidebarOpen = useSelector(
		(state: RootState) => state.preference.isSidebarOpen
	);

	const dispatch = useDispatch();

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	console.log('FFS');

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
		return <div>Loading</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	const eventsList = events.map((event: Event) => (
		<EventCard key={event.id} event={event} />
	));

	return (
		<>
			<h1 className='uppercase font-bold text-3xl pb-5'>{name}</h1>
			<ul className='flex flex-col gap-3'>{eventsList}</ul>
		</>
	);
};
