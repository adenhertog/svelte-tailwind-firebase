import staticAdapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: staticAdapter({
			fallback: 'index.html'
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			resolve: {
				alias: {
					'@': path.resolve('./src')
				}
			}
		}
	}
};

export default config;
