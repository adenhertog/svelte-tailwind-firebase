
import staticAdapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
    // Force Sveltekit to run in SPA mode
    // See https://github.com/sveltejs/kit/tree/master/packages/adapter-static#spa-mode
    // Can be replaced with https://github.com/jthegedus/svelte-adapter-firebase for SSR functionality
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
