# Template for a Componente Library (Vue 3 + Storybook + Vite)

This is a template for a componente library based on my [article](https://medium.com/@lmartim/criando-uma-biblioteca-de-componentes-com-vue-3-storybook-vite-e4a89baae02) (only available in portuguese for now), built with [Vue 3](https://v3.vuejs.org/) + [Storybook](https://storybook.js.org/) + [Vite](https://vitejs.dev/).

## Installation

```bash
yarn
```

## Commands

There are some base commands available at the package.json:

### Building Tokens

For the token architecture we use the [Amazon Style Dictionary](https://amzn.github.io/style-dictionary/#/).

This one will compile all .json files inside `./tokens/properties` folder and generate a single .scss file inside `./tokens/build`

```bash
yarn tokens
```

### Building the library

We build the project using `rollup.js`.

The commands will copy the tokens file from `./tokens/build` and `./src/assets/styles` to the `./dist`.

Then rollup will take every component exported in `./src/index.js` and built the compiled file in `./dist`

```bash
yarn lib:build
```

### Uploading the library

[Lerna](https://lerna.js.org/) is used to upload the compiled project to [npm](https://www.npmjs.com/). It'll upload everything inside the `./dist` folder.

Remember to change the package name inside in `./dist/package.json`.

```bash
yarn lib:publish
```

## Notes

When testing the application, there are some extra configs in `./vite.config.js` and `./storybook/main.js`. If needed remove the .scss files or include new ones.
