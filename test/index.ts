import test = require('tape')
import parseCodeloadUrl from '../src'

test('parse', t => {
  const repo = parseCodeloadUrl('https://codeload.github.com/pnpm/parse-codeload-url/tar.gz/3492fd75b29a0b36e91332bce2fe4592418a0892')

  t.equal(repo.name, 'parse-codeload-url')
  t.equal(repo.owner, 'pnpm')
  t.equal(repo.commit, '3492fd75b29a0b36e91332bce2fe4592418a0892')

  t.end()
})

test('unexpected URL', t => {
  t.throws(() => parseCodeloadUrl('https://google.com'), /Unexpected URL/)

  t.end()
})

test('bad argument', t => {
  t.throws(() => parseCodeloadUrl.call(null, 1), '`url` should be a string')

  t.end()
})
