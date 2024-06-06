import axios from 'axios';
import { NextRequest } from 'next/server';

export async function GET(
	_: NextRequest,
	{ params }: { params: { type: string } }
) {
	const { data } = await axios.get(
		`https://api.smarkets.com/v3/events?type=${params.type}&limit=20`
	);

	return Response.json(data);
}
