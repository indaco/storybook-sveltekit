# SvelteKit + TS + Storybook + Vitest + Tailwind CSS

Template for new projects with support to Storybook, SvelteKit, Typescript, Plop, Vitest and Tailwind CSS.

## Usage

1. Above the file list for this template, click Use this template.

Read more [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) about Creating a repository from a template.

## Run Storybook

```bash
npm run storybook
```

## Create a new component

It makes use of [plopjs](plopjs.com) to scaffold all the files (definition, test suite, story) for a new component.

```bash
npm run plop
```

## Step by Step

Here are the steps I did to complete the setup.

### Create a SvelteKit project

```bash
npm create svelte@latest my-stories

✔ Which Svelte app template? › Skeleton project
✔ Add type checking with TypeScript? › Yes, using TypeScript syntax
✔ Add ESLint for code linting? No
✔ Add Prettier for code formatting? Yes
✔ Add Playwright for browser testing? No
```

Next steps:

```bash
cd my-stories
# Install the project dependencies.
npm install
```

### Install Storybook

```bash
npx storybook init
```

#### NPM Migration

If you use NPM > v8.0 the installation process will ask you to run the 'npm7' migration. Select **yes** to add `--legacy-peer-deps=true` to the `.npmrc` file.

### Add Tailwind CSS to the project

```bash
npx svelte-add@latest tailwindcss
# Install the project dependencies.
npm install
```

#### Update main.cjs for storybook

```javascript
{
 name: '@storybook/addon-postcss',
  options: {
  postcssLoaderOptions: {
      implementation: require('postcss')
     }
 }
}
```

#### Update the Button CSS file to use some Tailwind CSS classes

```css
.storybook-button--primary {
    @apply bg-pink-600 text-white;
}
```

## License

Free and open-source software under the [MIT License](LICENSE)
