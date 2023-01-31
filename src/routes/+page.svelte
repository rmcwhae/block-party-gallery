<script>
	import MultiSelect from '$lib/components/MultiSelect.svelte';

	export let data;

	$: images = data.images;
	$: parameters = data.parameters;

	let colorPalette = [];
	let repeat = [];
	let repeatMaterials = [];
	let numColors = [];
	let materialType = [];
	let transparency = [];
	let colorDistribution = [];
	let heightDistribution = [];
	let size = [];
	let gap = [];
	let balance = [];
	let stopProb = [];
	let minDepth = [];
	let maxH = [];
	let maxHmult = [];

	$: filteredImages = images.filter((image) => {
		if (colorPalette.length > 0 && !colorPalette.includes(image.colorPalette)) return false;
		if (repeat.length > 0 && !repeat.includes(image.repeat)) return false;
		if (repeatMaterials.length > 0 && !repeatMaterials.includes(image.repeatMaterials))
			return false;
		if (numColors.length > 0 && !numColors.includes(image.numColors)) return false;
		if (materialType.length > 0 && !materialType.includes(image.materialType)) return false;
		if (transparency.length > 0 && !transparency.includes(image.transparency)) return false;
		if (colorDistribution.length > 0 && !colorDistribution.includes(image.colorDistribution))
			return false;
		if (heightDistribution.length > 0 && !heightDistribution.includes(image.heightDistribution))
			return false;
		if (size.length > 0 && !size.includes(image.size)) return false;
		if (gap.length > 0 && !gap.includes(image.gap)) return false;
		if (balance.length > 0 && !balance.includes(image.balance)) return false;
		if (stopProb.length > 0 && !stopProb.includes(image.stopProb)) return false;
		if (minDepth.length > 0 && !minDepth.includes(image.minDepth)) return false;
		if (maxH.length > 0 && !maxH.includes(image.maxH)) return false;
		if (maxHmult.length > 0 && !maxHmult.includes(image.maxHmult)) return false;

		return true;
	});
</script>

<div class="flex">
	<div class="sidebar">
		<h2>Filters</h2>

		<MultiSelect
			bind:value={colorPalette}
			title="Color Palette"
			options={parameters.colorPalette}
		/>
		<MultiSelect bind:value={repeat} title="Repeat" options={parameters.repeat} />
		<MultiSelect
			bind:value={repeatMaterials}
			title="Repeat Materials"
			options={parameters.repeatMaterials}
		/>
		<MultiSelect bind:value={numColors} title="Number of Colors" options={parameters.numColors} />
		<MultiSelect
			bind:value={materialType}
			title="Material Type"
			options={parameters.materialType}
		/>
		<MultiSelect bind:value={transparency} title="Transparency" options={parameters.transparency} />
		<MultiSelect
			bind:value={colorDistribution}
			title="Color Distribution"
			options={parameters.colorDistribution}
		/>
		<MultiSelect
			bind:value={heightDistribution}
			title="Height Distribution"
			options={parameters.heightDistribution}
		/>
		<MultiSelect bind:value={size} title="Size" options={parameters.size} />
		<MultiSelect bind:value={gap} title="Gap" options={parameters.gap} />
		<MultiSelect bind:value={balance} title="Balance" options={parameters.balance} />
		<MultiSelect bind:value={stopProb} title="Stop Probability" options={parameters.stopProb} />
		<MultiSelect bind:value={minDepth} title="Minimum Depth" options={parameters.minDepth} />
		<MultiSelect bind:value={maxH} title="Maximum Height" options={parameters.maxH} />
		<MultiSelect
			bind:value={maxHmult}
			title="Maximum Height Multiplier"
			options={parameters.maxHmult}
		/>
	</div>
	<div class="grid">
		{#each filteredImages as image}
			<img src={image.href} alt={image.name} width={200} height={200} />
		{/each}
	</div>
</div>

<style>
	:global(body) {
		margin: 1em;
		padding: 0;
		font-family: sans-serif;
	}
	.grid {
		flex-grow: 3;
		display: grid;
		grid-template-columns: repeat(auto-fill, 200px);
		grid-gap: 1rem;
	}
	.sidebar {
		flex-grow: 1;
	}
	.flex {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
</style>
