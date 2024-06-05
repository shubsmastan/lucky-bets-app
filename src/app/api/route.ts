import axios from 'axios';

export async function GET() {
	const { data } = await axios.get(
		'https://api.smarkets.com/v3/events?type=rugby_league_match&limit=6'
	);

	return Response.json(data);
}
