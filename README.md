# url-escape-tag
A template tag for escaping url parameters based on [ES2015 tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Tagged_template_strings).

Internally, this package uses node.js [querystring.escape](https://nodejs.org/api/querystring.html#querystring_querystring_escape), a safer implementation of [encodeURIComponent](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent).

## Status
[![npm version][npm-image]][npm-url] [![build status][travis-image]][travis-url]

## Installation
Install the package via `npm`:

```sh
npm install url-escape-tag --save
```

## Usage
### Arguments
1. `url` _(string)_: The url with parameters to escape.

### Returns
_(string)_: The url with parameters escaped.

### Example

```js
const esc = require('url-escape-tag');
const foo = '../foo';
const bar = '+bar';

console.log(esc`/${foo}?field1=${bar}`);
// => /..%2Ffoo?field1=%2Bbar
```

## Tests

```sh
npm test
```

## Release

```sh
npm version [<newversion> | major | minor | patch] -m "Release %s"
```

## License
MIT

[npm-image]: https://img.shields.io/npm/v/url-escape-tag.svg?style=flat-square
[npm-url]: https://npmjs.org/package/url-escape-tag
[travis-image]: https://img.shields.io/travis/seegno/url-escape-tag.svg?style=flat-square
[travis-url]: https://travis-ci.org/seegno/url-escape-tag
