import { json } from '@sveltejs/kit';

import { images } from '$lib/images';

export async function GET() {
	console.log('images', images);
	return json(images);
}
