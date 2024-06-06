import Link from 'next/link';
import { useStore } from '@tanstack/react-store';

import { store, setIsSidebarOpen } from '@/store';
import { Bebas_Neue } from 'next/font/google';
import Image from 'next/image';
import { MenuButton } from '@/components/MenuButton';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

export const Header = () => {
	const isSidebarOpen = useStore(store, state => state.isSidebarOpen);

	return (
		<header className='flex justify-between items-center w-full px-5 py-2 h-12 fixed top-0 z-10 bg-zinc-900'>
			<div className='flex items-center gap-5'>
				<MenuButton
					stroke={`${isSidebarOpen ? '#22c55e' : '#ffffff'}`}
					onClick={() => {
						setIsSidebarOpen(!isSidebarOpen);
					}}
				/>
				<h1
					className={`${bebasNeue.className} text-2xl select-none text-white`}>
					<Link href='/'>Lucky Bets</Link>
				</h1>
			</div>
			<Image src='/settings-icon.svg' alt='' width={25} height={25} />
		</header>
	);
};
