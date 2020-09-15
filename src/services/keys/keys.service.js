// Initializes the `keys` service on path `/keys`
const { Keys } = require('./keys.class')
const hooks = require('./keys.hooks')

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/keys', new Keys(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('keys')

  service.hooks(hooks)
}
