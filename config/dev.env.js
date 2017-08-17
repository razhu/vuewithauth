var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://test.local.agetic.gob.bo/busa/"',
  AUTH_URL: '"http://test.local.agetic.gob.bo/busa/autenticacion"',
  ONBEFOREUNLOAD: false,
  DEBUG_MODE: true
})
