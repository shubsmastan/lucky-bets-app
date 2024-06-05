import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';

export const Sidebar = () => {
	const isSidebarOpen = useSelector(
		(state: RootState) => state.preference.isSidebarOpen
	);

	return (
		<nav
			className={`${
				isSidebarOpen ? 'flex' : 'hidden'
			} bg-zinc-200 px-3 py-5 h-full w-60 dark:bg-zinc-800`}>
			<h2 className='text-emerald-500 text-xs uppercase font-semibold tracking-wide'>
				Categories
			</h2>
		</nav>
	);
};
