# parse-codeload-url

> Parse a tarball URL hosted on codeload.github.com

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/parse-codeload-url.svg)](https://www.npmjs.com/package/parse-codeload-url) [![Build Status](https://img.shields.io/travis/pnpm/parse-codeload-url/master.svg)](https://travis-ci.org/pnpm/parse-codeload-url)
<!--/@-->

## Installation

```sh
npm i -S parse-codeload-url
```

## Usage

<!--@example('./example.js')-->
```js
const parseCodeloadUrl = require('parse-codeload-url').default

const repo = parseCodeloadUrl('https://codeload.github.com/pnpm/parse-codeload-url/tar.gz/3492fd75b29a0b36e91332bce2fe4592418a0892')

console.log(repo)
//> { name: 'parse-codeload-url',
//    owner: 'pnpm',
//    commit: '3492fd75b29a0b36e91332bce2fe4592418a0892' }
```
<!--/@-->

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io)
