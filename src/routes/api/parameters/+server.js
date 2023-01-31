import { json } from '@sveltejs/kit';

import { images } from '$lib/images';

export async function GET() {
	const parameters = {
		seed: [],
		colorPalette: [],
		repeat: [],
		repeatMaterials: [],
		numColors: [],
		materialType: [],
		transparency: [],
		colorDistribution: [],
		heightDistribution: [],
		colorJitterAmt: [],
		W: [],
		size: [],
		gap: [],
		balance: [],
		stopProb: [],
		minDepth: [],
		smallestW: [],
		maxH: [],
		maxHmult: [],
		maxHradius: []
		// special: []
	};

	images.map((image) => {
		for (const key in image) {
			if (key in parameters) {
				if (!parameters[key].includes(image[key])) {
					parameters[key].push(image[key]); // add to array if not already there
				}
			}
		}
	});

	return json(parameters);
}
