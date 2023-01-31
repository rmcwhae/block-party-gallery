<script>
	import MultiSelect from '$lib/components/MultiSelect.svelte';
	export let data;

	$: images = data.images;
	$: parameters = data.parameters;
</script>

<h1>Gallery</h1>

<div class="flex">
	<div class="sidebar">
		<h2>Filters</h2>
		{#each Object.entries(parameters) as [key, values]}
			<MultiSelect {key} {values} />
		{/each}
	</div>
	<div class="grid">
		{#each images as image}
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
