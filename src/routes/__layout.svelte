<script context="module" lang="ts">
	import { initFirebase } from '../app/init-firebase';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load() {
		await initFirebase();
		return {
			props: {}
		};
	}
</script>

<script lang="ts">
	import '../app.css';
</script>

<main>
	<div class="m-4 p-4 border-2 text-center">
		<slot />
	</div>
</main>
