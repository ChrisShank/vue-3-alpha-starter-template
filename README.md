# Vue 3 Alpha Starter Template
This repository contains a simple starter template to experiment with the alpha version of Vue 3. **DISCLAIMER: Do not expect for Vue to be perfect since it was literally just released in alpha.** ParcelJS is used to bundler the SPA. Typescript is used to make it easier to explore the new API since there is limited documentation.

## Getting Started
Here are the steps necessary to start experiemnting yourself:
1. Clone this repo

2. Install dependencies

	```bash
	// Using NPM
	$ npm i

	// Using Yarn
	$ yarn
	```

2. Development server

	```bash
	// Using NPM
	$ npm run dev

	// Using Yarn
	$ yarn dev
	```

3. Build project (*This will not be an accurate bundle size since we are not using the production build of Vue*)

	```bash
	// Using NPM
	$ npm run build

	// Using Yarn
	$ yarn build
	```

## Documentation
Since Vue 3 is not released there is currently limited documentation on how to use it. Typescript mitgrates this a little bit because it is easier to explore and understand the new API. That being said there are some places to that could be useful:
* [Examples in the Vue 3 source code](https://github.com/vuejs/vue-next/tree/1c4cdd841daa2ba9c1ec35068c92f1ae776cacea/packages/vue/examples)
* [Vue Composition API RFC](https://vue-composition-api-rfc.netlify.com/#summary)
* [Vue 3 RFCs](https://github.com/vuejs/rfcs/tree/master/active-rfcs) and potentially open [pull requests](https://github.com/vuejs/rfcs/pulls)
* [Any sort of unit, integration, or E2E test in the Vue 3 source code](https://github.com/vuejs/vue-next/tree/1c4cdd841daa2ba9c1ec35068c92f1ae776cacea/packages/) (I would start in files that end in `.spec.ts`)

## Caveats
This starter template is not setup to use Vue's `Single File Components`, thus we cannot just `import {} from 'vue'` since the template compiler is not included with that build of Vue. Vue components must define a `template` and you must `import {} from 'vue/dist/vue.esm'`.
The file `src/vue-shim.ts` makes sure that Vue's typings are still usable.

If you would like to build the project using the production distribution of Vue make sure that all of you imports of Vue are like `import {} from 'vue/dist/vue.esm.prod'` and you change `src/vue-shim.ts` to:

```ts
declare module 'vue/dist/vue.esm.prod' {
	export * from 'vue'
}
``