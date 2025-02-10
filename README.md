# crst-icon

This template should help get you started developing with Vue 3 in Vite.

## Introduction

`crst-icon` is a Vue 3 library designed to simplify the integration and management of icons in your Vite projects. It provides a set of tools and components to efficiently handle icon files and their usage within your application.

## Installation

To install the `crst-icon` library, use npm or yarn:

```sh
npm install crst-icon
```

or

```sh
yarn add crst-icon
```

## Usage

Here's a basic example of how to use the `crst-icon` library in your Vue 3 project:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { useIcon } from 'crst-icon'

const app = createApp(App)
app.use(useIcon)
app.mount('#app')
```

## Configuration

The library allows you to customize the icons folder and handle icon files through configuration options. Refer to the `vite-plugin-crst-icons.ts` for more details on available configurations.

## Components

- **use-icon**: A composable function to easily integrate icons into your components.
- **iconsRegistry**: A registry to manage and access icons throughout your application.
- **Helper Functions**: Utility functions like `findIconsFolder` and `handelIconsFile` to assist in icon management.

## Development

To set up a development environment, follow these steps:

```sh
npm install
npm run dev
```

This will compile and hot-reload the project for development.

## TypeScript Support

To enable TypeScript support for `.vue` files, replace the `tsc` CLI with `vue-tsc` for type checking. Use [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) in your editor to make the TypeScript language service aware of `.vue` types.

## Contributing

Contributions are welcome! Please follow the standard GitHub workflow for submitting issues and pull requests.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
