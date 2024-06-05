'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

import { RootState } from '@/app/store';
import { setEvents } from '@/app/store/dataSlice';
import { BettingCard } from './BettingCard';

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
					'https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/events?type=rugby_league_match'
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
			<section className='p-5'>
				<p>Loading...</p>
			</section>
		);
	}

	if (error) {
		return (
			<section className='p-5'>
				<p>{error}</p>
			</section>
		);
	}

	const eventList = events.map(event => (
		<BettingCard key={event.id as string} event={event} />
	));

	return (
		<section className={`p-5 ${isSidebarOpen && 'pl-[16.5rem]'} w-full`}>
			<p>Welcome!</p>
			<div className='p-10 flex flex-col gap-3'>{eventList}</div>
		</section>
	);
};
