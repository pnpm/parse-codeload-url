const parseCodeloadUrl = require('./lib').default

const repo = parseCodeloadUrl('https://codeload.github.com/pnpm/parse-codeload-url/tar.gz/3492fd75b29a0b36e91332bce2fe4592418a0892')

console.log(repo)
