const { authenticate } = require('@feathersjs/authentication').hooks

module.exports = {
  before: {
    all: [],
    find: [authenticate('auth0')],
    get: [authenticate('auth0')],
    create: [],
    update: [authenticate('auth0')],
    patch: [authenticate('auth0')],
    remove: [authenticate('auth0')]
  },

  after: {
    all: [
    ],
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
