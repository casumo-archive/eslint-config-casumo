<h1 align="center">eslint-config-casumo</h1>

<p align="center">
  <a title='npm version' href="https://www.npmjs.com/package/eslint-config-casumo">
    <img src='https://img.shields.io/npm/v/eslint-config-casumo.svg?style=flat-square' />
  </a>
  <a title='MIT License' href="https://opensource.org/licenses/MIT">
    <img src='https://img.shields.io/npm/l/eslint-config-casumo.svg?style=flat-square' />
  </a>
  <a title='Downloads' href='http://npm-stat.com/charts.html?package=eslint-config-casumo&from=2015-08-01'>
    <img src='https://img.shields.io/npm/dm/eslint-config-casumo.svg?style=flat-square' />
  </a>
    <a title='Commitizen friendly' href='http://commitizen.github.io/cz-cli/'>
    <img src='https://img.shields.io/badge/commitizen-friendly-brightgreen.svg' />
  </a>
</p>

<h4 align="center">
    ESLint shareable config for the Casumo JavaScript code style
</h4>

***

## Installation

```bash
npm install --save-dev eslint-config-casumo
```

## Usage
Once the `eslint-config-casumo` package is installed, you can use it by specifying `casumo` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "casumo",
  "rules": {
    // Additional, per-project rules...
  }
}
```

_Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint._

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.

### Full configurations

This package includes the following complete and ready to use configurations:

- `casumo` - ES5 config
- `casumo/configurations/es5` - ES5 config
- `casumo/configurations/es5-browser` - ES5 + browser
- `casumo/configurations/es5-node` - ES5 + node
- `casumo/configurations/es5-test` - ES5 + test
- `casumo/configurations/es6` - ES6 config
- `casumo/configurations/es6-browser` - ES6 + browser
- `casumo/configurations/es6-node` - ES6 + node
- `casumo/configurations/es6-test` - ES6 + test
- `casumo/configurations/off` - All rules disabled

## NPM scripts

- `commit` - use this if you do not have [`commitizen`](https://github.com/commitizen/cz-cli) installed globally
- `lint` - lints the current project
- `find-new-eslint-rules` - checks for new (missing) rules
- `test` - runs a couple of tests

## Thanks to
- [eslint-config-walmart](https://github.com/walmartlabs/eslint-config-walmart) - for inspiration
