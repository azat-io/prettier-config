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
   * Do not add spaces inside JSDoc type brackets.
   */
  jsdocBracketSpacing: false,
  /**
   * Use multi-line comments instead of single-line for JSDoc comments.
   */
  jsdocCommentLineStrategy: 'multiline',
  /**
   * Remove empty JSDoc comment blocks.
   */
  jsdocEmptyCommentStrategy: 'remove',
  /**
   * Wrap lines as soon as they reach the print width.
   */
  jsdocLineWrappingStyle: 'greedy',
  /**
   * Do not always fence code blocks with triple backticks.
   */
  jsdocPreferCodeFences: false,
  /**
   * Do not add a blank line between the last `@param` and `@returns`.
   */
  jsdocSeparateReturnsFromParam: false,
  /**
   * Do not add blank lines between tag groups.
   */
  jsdocSeparateTagGroups: false,
  /**
   * Use one space in JSDoc formatting.
   */
  jsdocSpaces: 1,
  /**
   * Align JSDoc tags vertically.
   */
  jsdocVerticalAlignment: true,
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
    import.meta.resolve('prettier-plugin-curly'),
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
   * Enable TSDoc support.
   */
  tsdoc: true,
  /**
   * Indent lines with spaces instead of tabs.
   */
  useTabs: false,
}

export default config
