# Gallery

A filterable gallery of computer-generated images (not provided in source control), built with [SvelteKit](https://kit.svelte.dev/). Note that this is not optimized: images are not responsive, and the gallery is not paginated. This is a proof-of-concept, only meant to be run locally.

!["Demo view"](./demo.png)

Populate the `static/content` folder (may require creation) with images and their corresponding JSON files, e.g. `Block Party 64.json` and `Block Party 64.png`. For an example of the JSON format, see below:

```json
{
	"seed": 64,
	"zoom": 1.7492522583666077,
	"colorPalette": "Vintage",
	"repeat": true,
	"repeatMaterials": true,
	"numColors": 1,
	"materialType": "Flat",
	"transparency": false,
	"colorDistribution": "Random",
	"heightDistribution": "Inwards",
	"colorJitterAmt": 0.02,
	"W": 25,
	"size": 250,
	"gap": 0,
	"balance": 0,
	"stopProb": 0.05,
	"minDepth": 1,
	"smallestW": 1,
	"maxH": 8,
	"maxHmult": 3,
	"maxHradius": 1000,
	"special": []
}
```

## Running the App

Install dependencies with `npm install` (node v16+), then start the development server:

```bash
npm run dev
```

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
