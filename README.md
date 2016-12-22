# eslint-config-casumo
[![version](https://img.shields.io/npm/v/eslint-config-casumo.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-casumo)
[![downloads](https://img.shields.io/npm/dm/eslint-config-casumo.svg?style=flat-square)](http://npm-stat.com/charts.html?package=eslint-config-casumo&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/eslint-config-casumo.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Casumo JavaScript code style

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