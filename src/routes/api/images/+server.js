import { json } from '@sveltejs/kit';

import { images } from '$lib/images';

export async function GET() {
	return json(images);
}
