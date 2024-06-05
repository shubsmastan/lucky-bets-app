import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { categories } from '@/data';
import Link from 'next/link';

export const Dashboard = () => {
	const isSidebarOpen = useSelector(
		(state: RootState) => state.preference.isSidebarOpen
	);

	const categoryCards = categories.map(category => (
		<li key={category.id} className='list-none'>
			<Link
				href={`${category.id}`}
				className='flex gap-5 px-3 py-5 bg-zinc-200 dark:bg-zinc-900 rounded-sm hover:bg-zinc-300 hover:dark:bg-zinc-800'>
				<h2 className='font-bold text-lg'>{category.name}</h2>
			</Link>
		</li>
	));

	return (
		<section
			className={`py-5 px-10 ${isSidebarOpen && 'pl-[19rem]'} w-full`}>
			<h1 className='uppercase font-bold text-3xl pb-5'>Categories</h1>
			<div className='flex flex-col gap-3'>{categoryCards}</div>
		</section>
	);
};
