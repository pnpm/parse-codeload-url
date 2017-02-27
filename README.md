# parse-codeload-url

[![Greenkeeper badge](https://badges.greenkeeper.io/pnpm/parse-codeload-url.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/pnpm/parse-codeload-url.svg?branch=master)](https://travis-ci.org/pnpm/parse-codeload-url)

> Parse a tarball URL hosted on codeload.github.com

## Installation

```
npm i -S parse-codeload-url
```

## Usage

```js
import parseCodeloadUrl from 'parse-codeload-url'

const repo = parseCodeloadUrl('https://codeload.github.com/pnpm/parse-codeload-url/tar.gz/3492fd75b29a0b36e91332bce2fe4592418a0892')

console.log(repo)
// {
//   name: 'parse-codeload-url',
//   owner: 'pnpm',
//   commit: '3492fd75b29a0b36e91332bce2fe4592418a0892'
// }
```

## License

[MIT](LICENSE) © [Zoltan Kochan](https://www.kochan.io)
