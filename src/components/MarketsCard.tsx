import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Loading } from '@/components/Loading';
import { RecordType } from '@/types';

type Props = {
	market: RecordType;
	type?: string;
};

export const MarketCard = ({ market, type }: Props) => {
	const {
		data: contracts,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['contracts'],
		queryFn: async () => {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_URL}/api/markets/${market.id}/`
			);
			const contracts = data.contracts;
			return contracts;
		},
	});

	if (isLoading) {
		return (
			<div className='list-none p-5 bg-zinc-200 dark:bg-zinc-900 rounded-sm'>
				<Loading />
			</div>
		);
	}

	if (isError) {
		return (
			<div className='list-none p-5 bg-zinc-200 dark:bg-zinc-900 rounded-sm'>
				Could not get contracts data from Smarkets API.
			</div>
		);
	}

	const contractList = contracts?.map((contract: RecordType) => (
		<div
			key={contract.id}
			className='flex gap-10 justify-evenly items-center py-5 border-solid border-b-zinc-400 dark:border-b-zinc-600 border-b-[1px] lg:pl-5 lg:pr-10'>
			<h3 className='flex-1'>{contract.name}</h3>
			<div className='bg-emerald-500 rounded-md w-20 text-center px-3 py-1 font-bold'>
				{Math.floor(Math.random() * 10000) / 100}%
			</div>
			<div className='bg-sky-500 rounded-md w-20 text-center px-3 py-1 font-bold'>
				{Math.floor(Math.random() * 10000) / 100}%
			</div>
		</div>
	));

	return (
		<>
			<li className='list-none flex flex-col gap-1 p-5 bg-zinc-200 dark:bg-zinc-900 rounded-sm'>
				<h2 className='font-bold text-xl pb-3 border-solid border-b-zinc-400 dark:border-b-zinc-600 border-b-[1px]'>
					{market.name}
				</h2>
				{contractList}
			</li>
		</>
	);
};
