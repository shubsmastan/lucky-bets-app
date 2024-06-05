import axios from 'axios';
import { NextRequest } from 'next/server';

export async function GET(
	_: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { data } = await axios.get(
		`https://api.smarkets.com/v3/events/${params.id}/markets/`
	);

	return Response.json(data);
}
