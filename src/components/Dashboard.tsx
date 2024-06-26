import Link from 'next/link';
import { useStore } from '@tanstack/react-store';

import { store } from '@/store';
import { categories } from '@/data';
import { EventList } from '@/components/EventsList';
import { MarketsList } from '@/components/MarketsList';

type Props = {
	type: string;
	eventId?: string;
	eventType?: string;
};

export const Dashboard = ({ type, eventId, eventType }: Props) => {
	const isSidebarOpen = useStore(store, state => state.isSidebarOpen);

	const useDashboardContent = () => {
		switch (type) {
			case 'home': {
				return (
					<>
						<h1 className='uppercase font-bold text-3xl pb-5'>
							Categories
						</h1>
						<ul className='flex flex-col gap-3'>
							{categories.map(category => (
								<li key={category.id} className='list-none'>
									<Link
										href={`/${category.id}`}
										className='flex gap-5 px-3 py-5 bg-zinc-200 dark:bg-zinc-900 rounded-sm hover:bg-zinc-300 hover:dark:bg-zinc-800'>
										<h2 className='font-bold text-lg'>
											{category.name}
										</h2>
									</Link>
								</li>
							))}
						</ul>
					</>
				);
			}
			case 'boxing_match':
			case 'cycling':
			case 'cricket_match':
			case 'darts_match':
			case 'league_of_legends_match':
			case 'politics':
			case 'rugby_union_match':
			case 'tv_entertainment': {
				return (
					<EventList
						type={type}
						name={
							categories.find(category => category.id === type)!
								.name
						}
					/>
				);
			}

			case 'markets': {
				return <MarketsList type={eventType} eventId={eventId} />;
			}

			default: {
				return <p>404 - Not found.</p>;
			}
		}
	};

	const dashboardContent = useDashboardContent();
	return (
		<section
			className={`px-3 py-5 w-full lg:px-10 ${
				isSidebarOpen && 'lg:pl-[17rem]'
			}`}>
			{dashboardContent}
		</section>
	);
};
