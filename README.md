# purify-obj

> Purify & clean objects recursively, deleting undefined & null or falsy properties.

## Install

```
$ npm install purify-obj
```

Or

```
$ yarn add purify-obj
```

## Usage

```js
import { PurifyObj } from "purify-obj";
// Or
const { PurifyObj } = require("purify-obj");
// Or you can use the `po` shortcut
import { po } from "purify-obj";

const object = {
  className: "only-this-obj-key-will-persist",
  disabled: "",
  autoComplete: false,
  checked: undefined,
  spellCheck: null
};
const newObject = po(object);
//=> {className: 'only-this-obj-key-will-persist'}
```

## API

### PurifyObj(source, strict)

#### source

Type: `object`

Source object to purify properties from.

#### strict

Type: `boolean`

Strict will purify all falsy key

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
