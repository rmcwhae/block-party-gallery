export const images = Object.entries(import.meta.globEager('/content/*.json')).map(
	([path, data]) => {
		return {
			name: path.replace('/content/', '').replace('.json', ''),
			...data.default
		};
	}
);
