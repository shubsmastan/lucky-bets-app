import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

import { RootState } from '@/store';
import { Event, setEvents } from '@/store/dataSlice';
import { EventCard } from './EventCard';

export const Dashboard = () => {
	const events = useSelector((state: RootState) => state.data.events);
	const isSidebarOpen = useSelector(
		(state: RootState) => state.preference.isSidebarOpen
	);
	const dispatch = useDispatch();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const { data } = await axios.get(
					`${process.env.NEXT_PUBLIC_URL}/api`
				);
				dispatch(setEvents(data.events));
			} catch (err) {
				setError('Could not fetch events data from Smarkets API.');
				console.log(err);
			} finally {
				setLoading(false);
			}
		})();
	}, [dispatch]);

	if (loading) {
		return (
			<section
				className={`p-5 ${isSidebarOpen && 'pl-[16.5rem]'} w-full`}>
				<p>Loading...</p>
			</section>
		);
	}

	if (error) {
		return (
			<section
				className={`p-5 ${isSidebarOpen && 'pl-[16.5rem]'} w-full`}>
				<p>{error}</p>
			</section>
		);
	}

	const eventList = events.map(event => (
		<EventCard key={event.id} event={event} />
	));

	return (
		<section className={`py-5 ${isSidebarOpen && 'pl-[19rem]'} w-full`}>
			<h1 className='uppercase font-bold text-3xl pb-5'>Rugby</h1>
			<div className='flex flex-col gap-3'>{eventList}</div>
		</section>
	);
};
