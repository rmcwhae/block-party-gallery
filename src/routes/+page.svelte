<script>
	export let data;

	$: images = data.images;
</script>

<h1>Gallery</h1>

<div class="flex">
	<div class="sidebar">Filters</div>
	<div class="grid">
		{#each images as image}
			<img src={image.href} alt={image.name} width={200} height={200} />
		{/each}
	</div>
</div>

<style>
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
