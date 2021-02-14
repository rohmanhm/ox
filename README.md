# @rohmanhm/ox

> A Javascript utility to clean objects recursively, deleting undefined & null or falsy properties.

## Install

```
$ npm install @rohmanhm/ox
```

Or

```
$ yarn add @rohmanhm/ox
```

## Usage

```js
import ox from '@rohmanhm/ox';
// Or
const ox = require('@rohmanhm/ox').default;

const object = {
  className: 'only-this-obj-key-will-persist',
  disabled: '',
  autoComplete: false,
  checked: undefined,
  spellCheck: null,
};
const newObject = ox(object);
//=> {className: 'only-this-obj-key-will-persist'}
```

## API

### ox(source, strict)

#### source

Type: `object`

Source object to clean properties from.

#### strict

Type: `boolean`
Default: `true`
Strict will clean all falsy key

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

## Related

- [clean-obj](https://github.com/ricardofbarros/clean-obj) - Clean objects recursively, deleting undefined & null or falsy properties.
