import { App } from '@/components/App';

type Props = {
	params: { type: string; id: string };
};

export default function Home({ params }: Props) {
	return <App type='markets' eventType={params.type} eventId={params.id} />;
}
