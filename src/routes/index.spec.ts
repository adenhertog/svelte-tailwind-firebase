import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import Index from './index.svelte';

test('welcome page renders', () => {
	const { getByText } = render(Index, { props: { welcome: 'Welcome' } });
	expect(getByText('Welcome to SvelteKit + Tailwind + Firebase!')).toBeInTheDocument();
});
