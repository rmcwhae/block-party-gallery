export const images = Object.entries(import.meta.globEager('/static/content/*.json')).map(
	([path, data]) => {
		const name = path.replace('static/content/', '').replace('.json', '');
		return {
			name,
			href: '/content' + name + '.png',
			...data.default
		};
	}
);
