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

### Configuration structure
- `casumo/rules/...` - grouping for rules by category (f.ex `eslint`, `mocha`, etc.)
    - Each group ideally would have `on/off.js` configurations files which will be used for composing presets
- `causmo/configuration/...` - composition of rules into 'presets'

#### Why `on.js` and `off.js`?
The idea is to always ship a complete list of ESLint rules and explicitly turn off rule groups which are not needed. This is mostly useful for when `eslint-find-rules` runs. In case any new rule is added the plugin will call out the missing rule.

For example if we want to completely ignore `ecma-script-6` rules we just extend the configuration preset with `/rules/eslint/ecma-script-6/off.js`.

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

## Contributing

To contribute to the project, please follow these steps:

0. File an issue with the idea you wish to put forward
0. Fork the repo
0. Make a branch for your change
0. Run `npm` or `yarn install`
0. Make your changes
0. Run `npm` or `yarn test`
0. Run `git add -A` to add your changes
0. Run `npm` or `yarn run commit` (do not use git commit - unless you have [`commitizen`](https://github.com/commitizen/cz-cli) installed globally)
0. Push your changes
0. Create the Pull Request
0. Get merged and 🎉!

## Thanks to
- [eslint-config-walmart](https://github.com/walmartlabs/eslint-config-walmart) - for inspiration
