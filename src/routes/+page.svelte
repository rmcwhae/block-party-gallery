<script>
	export let data;

	$: images = data.images;
</script>

<h1>Gallery</h1>

<div class="grid">
	{#each images as image}
		<img src={image.href} alt={image.name} width={200} height={200} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, 200px);
		grid-gap: 1rem;
	}
</style>
