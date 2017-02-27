export default function (url: string) {
  if (typeof url !== 'string') {
    throw new TypeError('`url` should be a string')
  }
  const parts = url.split('/')
  if (parts[2] !== 'codeload.github.com') {
    throw new Error(`Unexpected URL. Expected codeload.github.com host. Actual URL: ${url}`)
  }
  return {
    name: parts[4],
    owner: parts[3],
    commit: parts[6],
  }
}
