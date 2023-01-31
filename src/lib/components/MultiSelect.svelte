<script>
	export let key;
	export let values;
</script>

<details>
	<summary>{key}</summary>
	{#each values as value}
		<label>
			<input type="checkbox" bind:group={values} {value} />
			{value}
		</label>
	{/each}
</details>

<style>
	label {
		display: block;
	}
</style>
