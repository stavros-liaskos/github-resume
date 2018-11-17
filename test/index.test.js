import test from 'ava'
import { Nuxt, Builder } from 'nuxt'
import { resolve } from 'path'

export var nuxt = null
export var host = null
export var port = null
export var baseURL = null

// Init Nuxt.js and start listening at http://localhost:4000
test.before('Init Nuxt.js', async t => {
  // Explicitly override BABEL_ENV='production' here because
  // ava sets NODE_ENV='test' which breaks babel-preset-vue-app,
  // which in turn breaks uglify-js, which breaks our build.
  process.env.BABEL_ENV = 'production'
  const rootDir = resolve(__dirname, '..')
  let config = {}
  config = require(resolve(rootDir, 'nuxt.config.js'))
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  nuxt = new Nuxt(config)
  const builder = new Builder(nuxt)
  await builder.build()
  host = process.env.HOST || 'localhost'
  port = process.env.PORT || 4000
  nuxt.listen(port, host)
  baseURL = `http://${host}:${port}`
})

// Example of testing via DOM checking
test('Route / exits and render HTML with CSS applied', async t => {
  const window = await nuxt.renderAndGetWindow('http://localhost:4000/')
  const element = window.document.querySelector('.desc-title')
  t.not(element, null)
  t.is(element.textContent, 'Hey, are you')
})

// Teardown
test.after.always('Shutdown Nuxt.js server', async t => {
  nuxt.close()
})
