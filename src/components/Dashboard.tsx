'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

import { RootState } from '@/app/store';
import { setEvents } from '@/app/store/dataSlice';

export const Dashboard = () => {
	const events = useSelector((state: RootState) => state.data.events);
	const dispatch = useDispatch();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const { data } = await axios.get(
					'https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/events'
				);
				dispatch(setEvents(data));
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

	return (
		<section className='p-5'>
			<p>Welcome!</p>
			{events.map(e => (
				<li key={e.id as string}>{e.description}</li>
			))}
		</section>
	);
};
