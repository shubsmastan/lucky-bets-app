import { useSelector } from 'react-redux';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { RootState } from '@/store';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';

export const Sidebar = () => {
	const isSidebarOpen = useSelector(
		(state: RootState) => state.preference.isSidebarOpen
	);

	const categories = [
		{ id: 'boxing_match', name: 'Boxing' },
		{ id: 'call_of_duty_match', name: 'Call of Duty' },
		{ id: 'politics', name: 'Politics' },
		{ id: 'tennis_match', name: 'Tennis' },
		{ id: 'tv_entertainment', name: 'Televsion' },
	];

	return (
		<nav
			className={`${
				isSidebarOpen ? 'flex' : 'hidden'
			} bg-zinc-200 px-3 py-5 h-full w-60 fixed top-12 dark:bg-zinc-800`}>
			<ul>
				<li>
					<h2 className='text-emerald-500 text-xs uppercase font-semibold tracking-wide pb-3'>
						Categories
					</h2>
				</li>
				{categories.map(cat => (
					<li
						key={cat.id}
						className='flex gap-3 items-center text-sm font-semibold pb-3'>
						<FontAwesomeIcon
							icon={faHeartEmpty}
							className='cursor-pointer'
						/>
						<Link href='/'>{cat.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
