# crst-icon

A lightweight and flexible icon library for Vue 3 applications.

## Introduction

`crst-icon` is a Vue 3 library that provides an efficient way to manage and use icons in your applications. It includes a set of default icons and allows you to easily add your own custom icons.

## Features

- 🚀 Vue 3 Support
- 📦 Built-in Default Icons
- 🎨 Custom Icon Support
- 🔧 Easy Configuration
- 💪 TypeScript Support
- 🎯 Tree-shakeable

## Installation

```bash
npm install crst-icon
```

or

```bash
yarn add crst-icon
```

## Basic Usage

1. Import and register the component in your main file:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { CrstIcon } from 'crst-icon'

const app = createApp(App)
app.component('CrstIcon', CrstIcon)
app.mount('#app')
```

2. Use the icon component in your templates:

```vue
<template>
  <div>
    <CrstIcon name="home" />
  </div>
</template>
```

## Using Default Icons

The library comes with a set of default icons that you can use right away:

```vue
<template>
  <CrstIcon name="home" />
</template>
```

## Adding Custom Icons

You can register your own custom icons:

```javascript
import { registerIcons } from 'crst-icon'

// Get all icon files in your icons directory
const customIcons = import.meta.glob('./icons/*.vue')

// Register your custom icons
registerIcons(customIcons, 'custom')
```

## Icon Properties

| Prop   | Type   | Default        | Description       |
| ------ | ------ | -------------- | ----------------- |
| name   | String | required       | Name of the icon  |
| size   | String | '1em'          | Size of the icon  |
| color  | String | 'currentColor' | Color of the icon |
| rotate | Number | 0              | Rotation degree   |

## TypeScript Support

The library includes TypeScript declarations out of the box. No additional setup is required.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License © 2024 [codetab](https://github.com/codetaab)

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
