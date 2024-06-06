import Link from 'next/link';
import { useStore } from '@tanstack/react-store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGear } from '@fortawesome/free-solid-svg-icons';

import { store, setIsSidebarOpen } from '@/store';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

export const Header = () => {
	const isSidebarOpen = useStore(store, state => state.isSidebarOpen);

	return (
		<header className='flex justify-between items-center w-full px-5 py-2 h-12 fixed top-0 z-10 bg-zinc-900'>
			<div className='flex items-center gap-5'>
				<FontAwesomeIcon
					icon={faBars}
					size='lg'
					className={`${
						isSidebarOpen && 'text-emerald-500'
					} cursor-pointer`}
					onClick={() => {
						setIsSidebarOpen(!isSidebarOpen);
					}}
				/>
				<h1
					className={`${bebasNeue.className} text-2xl select-none text-white`}>
					<Link href='/'>Lucky Bets</Link>
				</h1>
			</div>
			<FontAwesomeIcon
				icon={faGear}
				size='lg'
				className='cursor-pointer'
				onClick={() => {}}
			/>
		</header>
	);
};
