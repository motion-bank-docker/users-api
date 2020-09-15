// const { authenticate } = require('@feathersjs/authentication').hooks
const { authorize } = require('@morphatic/feathers-auth0-authorize-hook')({ userService: null })

module.exports = {
  before: {
    all: [authorize],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
