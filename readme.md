# Prettier Config

<img
  src="https://raw.githubusercontent.com/azat-io/prettier-config/main/assets/logo.svg"
  alt="Prettier Config Logo"
  align="right"
  width="160"
  height="160"
/>

[![Version](https://img.shields.io/npm/v/@azat-io/prettier-config.svg?color=f8bc45&labelColor=1a2b34)](https://npmjs.com/package/@azat-io/prettier-config)
[![GitHub License](https://img.shields.io/badge/license-MIT-232428.svg?color=f8bc45&labelColor=1a2b34)](https://github.com/azat-io/prettier-config/blob/main/license.md)

A comprehensive and opinionated Prettier configuration that enforces clean,
consistent code formatting across projects. Seamlessly implement uniform styling
standards by utilizing a carefully tuned set of formatting rules and plugins.

This config delivers a production-ready Prettier setup through a single,
optimized configuration, ensuring consistent code style across different project
types and frameworks.

## Installation

1. Install package:

```sh
pnpm add --save-dev prettier @azat-io/prettier-config
```

2. Create Prettier configuration file `prettier.config.ts`:

```ts
import type { Config } from 'prettier'

import prettierConfig from '@azat-io/prettier-config'

export default prettierConfig satisfies Config
```

3. Add script for package.json:

```json
{
  "scripts": {
    "test:format": "prettier --check \"**/*.{js,ts,json,md,yml}\""
  }
}
```

## Plugins

This config uses the following plugins:

- [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)
- [prettier-plugin-jsdoc](https://github.com/hosseinmd/prettier-plugin-jsdoc)
- [prettier-plugin-svelte](https://github.com/sveltejs/prettier-plugin-svelte)

## See also

- [@azat-io/eslint-config](https://github.com/azat-io/eslint-config)
- [@azat-io/stylelint-config](https://github.com/azat-io/stylelint-config)
- [@azat-io/typescript-config](https://github.com/azat-io/typescript-config)

## License

MIT &copy; [Azat S.](https://azat.io)
