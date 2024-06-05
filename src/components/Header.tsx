'use client';

import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGear } from '@fortawesome/free-solid-svg-icons';

import { RootState } from '@/store';
import { toggle } from '@/store/preferenceSlice';

import { Bebas_Neue } from 'next/font/google';
import Link from 'next/link';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

export const Header = () => {
	const isSidebarOpen = useSelector(
		(state: RootState) => state.preference.isSidebarOpen
	);
	const dispatch = useDispatch();

	return (
		<header className='flex justify-between items-center w-full px-5 py-2 h-12 fixed top-0 z-10 bg-zinc-300 dark:bg-zinc-900'>
			<div className='flex items-center gap-5'>
				<FontAwesomeIcon
					icon={faBars}
					size='lg'
					className={`${
						isSidebarOpen && 'text-emerald-500'
					} cursor-pointer`}
					onClick={() => {
						dispatch(toggle());
					}}
				/>
				<h1 className={`${bebasNeue.className} text-2xl select-none`}>
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
