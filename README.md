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
- 🎭 Customizable Styling
- ♿ Accessibility Support

## Installation

```bash
npm install @codetab/crst-icon
```

or

```bash
yarn add @codetab/crst-icon
```

## Setup Guide

### 1. Register Your Icons

Create an icons registry file (e.g., `src/icons/index.ts`):

```typescript
// src/icons/index.ts
import { registerIcons } from '@codetab/crst-icon'

const icons = import.meta.glob('./*.vue')

registerIcons(icons)
```

### 2. Set Up Your Main Application

Import and register the component and styles in your main file:

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import './icons' // Import icons registry
import { CrstIcon } from '@codetab/crst-icon'
import '@codetab/crst-icon/style.css'

const app = createApp(App)
app.component('CrstIcon', CrstIcon)
app.mount('#app')
```

### 3. Use in Components

Use the icon component in your templates:

```vue
<template>
  <div>
    <CrstIcon name="home" size="md" />
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

## Styling Options

### Size Classes

The library provides predefined size classes:

- `xs` - 1rem (16px)
- `sm` - 1.5rem (24px)
- `md` - 2rem (32px)
- `lg` - 2.5rem (40px)
- `xl` - 3rem (48px)
- `2xl` - 4rem (64px)
- `3xl` - 5rem (80px)
- `4xl` - 6rem (96px)
- `5xl` - 7rem (112px)
- `6xl` - 8rem (128px)
- `7xl` - 9rem (144px)
- `8xl` - 10rem (160px)
- `9xl` - 11rem (176px)
- `10xl` - 12rem (192px)

```vue
<CrstIcon name="home" size="md" />
```

### Color Classes

Built-in color variants:

- `primary`
- `secondary`
- `success`
- `warning`
- `error`
- `info`

```vue
<CrstIcon name="home" color="primary" />
```

### Custom Colors

You can customize the colors using CSS variables:

```css
:root {
  --icon-primary-color: #your-color;
  --icon-secondary-color: #your-color;
  --icon-success-color: #your-color;
  --icon-warning-color: #your-color;
  --icon-error-color: #your-color;
  --icon-info-color: #your-color;
  --icon-focus-color: #your-color;
}
```

### Animation

Add spinning animation to your icon:

```vue
<CrstIcon name="loading" class="css-icon--spin" />
```

## Icon Properties

| Prop   | Type   | Default        | Description                    |
| ------ | ------ | -------------- | ------------------------------ |
| name   | String | required       | Name of the icon               |
| size   | String | 'md'           | Size of the icon (xs to 10xl)  |
| color  | String | 'currentColor' | Color class or CSS color value |
| rotate | Number | 0              | Rotation degree                |

## TypeScript Support

The library includes TypeScript declarations out of the box. No additional setup is required.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License © 2024 [codetab](https://github.com/codetaab)

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
