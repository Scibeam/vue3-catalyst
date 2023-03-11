# Scibeam Vue3 Catalyst

## Quickstart
Clone
```
git clone git@github.com:Scibeam/vue3-catalyst.git
```

Install dependencies:
```
npm i
```

Run in development mode
```
npm run dev
```

Make a production build
```
npm run build
```

## Copying
If you would like to copy the files into an existing repo you can use rsync. You may need to re-install dependencies with `npm i` after the copy process.
```
rsync -av --progress ./vue3-catalyst/ ./audio-lab-ui --exclude='.git' --exclude='node_modules' --exclude='dist'
```

## Idea
__vue3-catalyst__ provides a starting point for new Vue 3 apps ands aims to save time by including all of our goto third party libraries and configuration settings in one easily cloned and repuposed repo.

## Moving Parts (A-Z)
  * ESLint (check on save w/ rollup)
  * Font Awesome (free tier)
  * Pinia
  * TypeScript
  * Vite
  * Vitest
  * Vite SVG loader
  * Vue 3
  * VueRouter
  * Vuetify

## Theme
We include our [default font DM Sans](https://fonts.google.com/specimen/DM+Sans?query=dm+sans), loaded in both woff and woff2 formats. There are light and dark color schemes provided as well, each using slightly different configurations of the standard Scibeam color palette. In the future we may consider parting out the theme into an NPM package so that it can be updated and easily upgraded as we make changes. For now though it is included here.

## Considerations
ESLint is configured to run each time a `.vue`, `.js` or `.ts` file is saved. This is made possible by [@rollup/plugin-eslint](https://www.npmjs.com/package/@rollup/plugin-eslint) and has been added to `vite.config.ts`. To make this work as expected I also had to ignore a few file types in `.eslintrc.cjs`.

Additionally, some rather insignificatnt rules were bent in `.eslintrc.cjs` to make for cleaner builds.
