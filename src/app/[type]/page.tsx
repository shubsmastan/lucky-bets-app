import { App } from '@/components/App';

type Props = {
	params: { type: string };
};

export default function Home({ params }: Props) {
	return <App type={params.type} />;
}
