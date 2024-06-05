import Link from 'next/link';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Event } from '@/store/dataSlice';

type Props = {
	event: Event;
	type: string;
};

export const EventCard = ({ event, type }: Props) => {
	return (
		<li className='list-none'>
			<Link
				href={`/${type}/${event.id}`}
				className='flex flex-col gap-1 p-3 bg-zinc-200 dark:bg-zinc-900 rounded-sm hover:bg-zinc-300 hover:dark:bg-zinc-800'>
				<h2 className='font-bold'>{event.name}</h2>
				<div className='flex items-center gap-1 text-xs'>
					<FontAwesomeIcon icon={faCalendar} size={'xs'} />
					<h3 className='pt-[1.5px]'>{event.start_date}</h3>
				</div>
				{event.traded && <h3>{event.traded}</h3>}
			</Link>
		</li>
	);
};
