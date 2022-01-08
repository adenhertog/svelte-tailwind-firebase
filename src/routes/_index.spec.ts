// File is prefixed with `_` to make it a private module and hence exclude it from being built as an endpoint
// See https://stackoverflow.com/a/69457826/210985

import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import Index from './index.svelte';

test('welcome page renders', () => {
	const { getByText } = render(Index, { props: { welcome: 'Welcome' } });
	expect(getByText('Welcome to SvelteKit + Tailwind + Firebase!')).toBeInTheDocument();
});
