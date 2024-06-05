'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGear } from '@fortawesome/free-solid-svg-icons';

import { Bebas_Neue } from 'next/font/google';
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

export const Header = () => {
	return (
		<header className='flex justify-between items-center px-5 py-2 bg-zinc-300 dark:bg-zinc-900'>
			<div className='flex items-center gap-5'>
				<FontAwesomeIcon
					icon={faBars}
					size='lg'
					className='text-emerald-500'
					onClick={() => {}}
				/>
				<h1 className={`${bebasNeue.className} text-2xl`}>
					Lucky Bets
				</h1>
			</div>
			<FontAwesomeIcon icon={faGear} size='lg' onClick={() => {}} />
		</header>
	);
};
