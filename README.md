# svelete-tailwind-firebase template

A boilerplate or starter template containing:

- **SvelteKit** - front end framework
- **Tailwind CSS** - CSS framework
- **Firebase** - Hosting and database storage
- **Typescript** - Type system
- **Jest** - Test runner
- **ESLint** - Linting
- **Prettier** - Code formatting
- **cssnano** - Css minification
- **Vite** - Prod packaging and dev HMR
- **Github actions** - Basic CI/CD pipeline for firebase

👉 This project is built and hosted at https://svelte-typescript-firebase.web.app/ 👈


## Installing

After forking this repo, install the dependencies:

```sh
npm install
```

Next, update the following files with your firebase configuration:

- .firebaserc
- init-firebaes.ts

## Developing

A development server that launches at http://localhost:3000 can be run with the following command:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Building and deployment should happen automatically using github actions once you commit your changes to `master`.

To do this manually from your local machine, run:

```bash
npm run build
firebase deploy # You'll need to have `firebase-tools` installed globally 
```

## Where to from here?

### Server Side Rendering

Whilst this boilerplate uses Sveltekit, it disables the use of SSR by using `@sveltejs/adapter-static` configured inside
svelte.config.js.

To enable SSR rendering via firebase functions, swap this adapter out for https://www.npmjs.com/package/svelte-adapter-firebase
instead. 

### Sveltekit beta

At the time of writing this, Sveltekit was still in beta. As such some of the library code may change prior to v1 being released.

https://snyk.io/ will keep the package versions evergreen in this repo, so when you clone it you should have the latest
version of all libraries. 

### Firestore lite

Currently the app is configured to use [Firestore Lite](https://firebase.google.com/docs/firestore/solutions/firestore-lite) to reduce the vendor bundle size. If you need snapshot listeners and other advanced firestore features then you may need 
to run the full fat version by replacing references of `firebase/firestore/lite` to `firebase/firestore`.
