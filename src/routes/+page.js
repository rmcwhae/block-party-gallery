export async function load({ fetch }) {
	const images = await fetch('/api/images').then((r) => r.json());
	const parameters = await fetch('/api/parameters').then((r) => r.json());

	return {
		images,
		parameters
	};
}
