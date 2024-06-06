import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@tanstack/react-store';

import { store, setActiveTab } from '@/store';
import { categories } from '@/data';

export const Sidebar = () => {
	const isSidebarOpen = useStore(store, state => state.isSidebarOpen);
	const activeTab = useStore(store, state => state.activeTab);

	const categoryNavs = categories.map(category => (
		<li key={category.id} className='list-none w-full'>
			<Link
				href={`/${category.id}`}
				onClick={() => {
					setActiveTab(category.id);
				}}
				className={`flex gap-3 items-center text-sm font-semibold w-full px-3 py-2 ${
					activeTab === category.id && 'bg-emerald-800'
				} hover:bg-emerald-800`}>
				<Image src={category.icon} alt='' width={15} height={15} />
				{category.name}
			</Link>
		</li>
	));

	return (
		<nav
			className={`${
				isSidebarOpen ? 'flex' : 'hidden'
			} py-5 h-full w-60 fixed top-12 bg-zinc-800 text-white`}>
			<ul className='w-full'>
				<li>
					<h2 className='text-emerald-500 text-xs uppercase font-semibold tracking-wide px-3 pb-3'>
						Categories
					</h2>
				</li>
				{categoryNavs}
			</ul>
		</nav>
	);
};
