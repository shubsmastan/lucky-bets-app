import { Event } from '@/store/dataSlice';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
	event: Event;
};

export const EventCard = ({ event }: Props) => {
	return (
		<>
			<li className='list-none px-3 py-5 bg-zinc-200 dark:bg-zinc-900'>
				<h2 className='font-bold'>{event.name}</h2>
				<div className='flex items-center gap-1 text-xs'>
					<FontAwesomeIcon icon={faCalendar} size={'xs'} />
					<h3 className='pt-[1px]'>{event.start_date}</h3>
				</div>
				{event.traded && <h3>{event.traded}</h3>}
			</li>
		</>
	);
};
