/*
  eslint perfectionist/sort-objects: [
    'error',
    {
      type: 'alphabetical',
      order: 'asc',
      partitionByNewLine: true
    }
  ]
*/

import type { Config } from 'prettier'

let config: Config = {
  /**
   * Omit parentheses when possible in arrow functions.
   */
  arrowParens: 'avoid',
  /**
   * Put the `>` of a multi-line HTML element on a new line.
   */
  bracketSameLine: false,
  /**
   * Print spaces between brackets in object literals.
   */
  bracketSpacing: true,
  /**
   * Use Unix line endings.
   */
  endOfLine: 'lf',
  /**
   * Use curious ternaries with the question mark after the condition.
   */
  experimentalTernaries: true,
  /**
   * Respect the default value of CSS `display` property for HTML whitespace
   * sensitivity.
   */
  htmlWhitespaceSensitivity: 'css',
  /**
   * Use multi-line comments instead of single-line for JSDoc comments.
   */
  jsdocCommentLineStrategy: 'multiline',
  /**
   * Use double quotes in JSX.
   */
  jsxSingleQuote: false,
  /**
   * Preserve the original wrapping of object literals.
   */
  objectWrap: 'preserve',
  /**
   * Provide file-specific options.
   */
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
      },
    },
  ],
  /**
   * Prettier plugins to use.
   */
  plugins: [
    import.meta.resolve('prettier-plugin-astro'),
    import.meta.resolve('prettier-plugin-svelte'),
    import.meta.resolve('prettier-plugin-jsdoc'),
  ],
  /**
   * Specify the line length that the printer will wrap on.
   */
  printWidth: 80,
  /**
   * Wrap prose if it exceeds the print width.
   */
  proseWrap: 'always',
  /**
   * Only add quotes around object properties where required.
   */
  quoteProps: 'as-needed',
  /**
   * Do not print semicolons at the ends of statements.
   */
  semi: false,
  /**
   * Enforce single attribute per line in HTML, Vue, and JSX.
   */
  singleAttributePerLine: true,
  /**
   * Use single quotes instead of double quotes.
   */
  singleQuote: true,
  /**
   * Specify the number of spaces per indentation level.
   */
  tabWidth: 2,
  /**
   * Print trailing commas wherever possible in multi-line structures.
   */
  trailingComma: 'all',
  /**
   * Indent lines with spaces instead of tabs.
   */
  useTabs: false,
}

export default config
