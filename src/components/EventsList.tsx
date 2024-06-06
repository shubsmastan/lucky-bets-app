'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { EventCard } from '@/components/EventCard';
import { Loading } from '@/components/Loading';
import { RecordType } from '@/types';

type Props = {
	type: string;
	name: string;
};

export const EventList = ({ type, name }: Props) => {
	const {
		data: events,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['events'],
		queryFn: async () => {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_URL}/api/${type}/`
			);
			const events = data.events;
			return events;
		},
	});

	if (isLoading) {
		return (
			<>
				<h1 className='uppercase font-bold text-3xl pb-5'>{name}</h1>
				<Loading />
			</>
		);
	}

	if (isError || !events) {
		return (
			<>
				<h1 className='uppercase font-bold text-3xl pb-5'>{name}</h1>
				<p>Could not get event data from Smarkets API.</p>
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
