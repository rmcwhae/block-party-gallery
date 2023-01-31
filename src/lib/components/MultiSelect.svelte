<script>
	export let value;
	export let title;
	export let options;
</script>

<!-- Add `open` to details below to open by default -->
<details>
	<summary>{title}</summary>
	{#each options as option}
		<label>
			<input type="checkbox" bind:group={value} value={option} />
			{option}
		</label>
	{/each}
</details>

<style>
	label {
		display: block;
	}
	summary {
		padding: 0.5em 0;
	}
</style>
