<script lang="ts" context="module">
	import { getRandomWelcome } from '../app/welcomes';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load() {
		const welcome = await getRandomWelcome();

		return {
			props: {
				welcome
			}
		};
	}
</script>

<script lang="ts">
	export let welcome: string;
</script>

<svelte:head>
	<title>{welcome}</title>
</svelte:head>

<h1>{welcome} to SvelteKit + Tailwind + Firebase!</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> for their documentation</p>
<p>Visit <a href="https://tailwindcss.com/brand">tailwindcss.com</a> for their documentation</p>
