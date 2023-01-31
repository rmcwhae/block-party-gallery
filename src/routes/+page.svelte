<script>
	export let data;

	$: images = data.images;

	// $: console.log('images', images);
</script>

<h1>Gallery</h1>

{#each images as image}
	<p>{image.name}</p>
{/each}
