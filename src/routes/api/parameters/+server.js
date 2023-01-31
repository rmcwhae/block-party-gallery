import { json } from '@sveltejs/kit';

import { images } from '$lib/images';

export async function GET() {
	const parameters = {
		// seed: [], // Lots of different values, each may be unique?
		colorPalette: [],
		repeat: [],
		repeatMaterials: [],
		numColors: [],
		materialType: [],
		transparency: [],
		colorDistribution: [],
		heightDistribution: [],
		// colorJitterAmt: [], // all 0.02
		// W: [], // all 25
		size: [],
		gap: [],
		balance: [],
		stopProb: [],
		minDepth: [],
		// smallestW: [], // all 1
		maxH: [],
		maxHmult: []
		// maxHradius: [] // all 1000
		// special: [] // all empty arrays
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

	for (const key in parameters) {
		if (typeof parameters[key][0] === 'number') {
			parameters[key].sort((a, b) => a - b); // sort numerically
		} else {
			parameters[key].sort(); // sort alphabetically
		}
	}

	return json(parameters);
}
