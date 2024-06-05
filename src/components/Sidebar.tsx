import Link from 'next/link';
import Image from 'next/image';

import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { categories } from '@/data';

export const Sidebar = () => {
	const isSidebarOpen = useSelector(
		(state: RootState) => state.preference.isSidebarOpen
	);

	const categoryNavs = categories.map(category => (
		<li key={category.id}>
			<Link
				href={`/${category.id}`}
				className='flex gap-3 items-center text-sm font-semibold pb-4'>
				<Image
					src={category.icon}
					alt=''
					width={15}
					height={15}
					className='dark:invert-0'
				/>
				{category.name}
			</Link>
		</li>
	));

	return (
		<nav
			className={`${
				isSidebarOpen ? 'flex' : 'hidden'
			} px-3 py-5 h-full w-60 fixed top-12 bg-zinc-800`}>
			<ul>
				<li>
					<h2 className='text-emerald-500 text-xs uppercase font-semibold tracking-wide pb-5'>
						Categories
					</h2>
				</li>
				{categoryNavs}
			</ul>
		</nav>
	);
};
