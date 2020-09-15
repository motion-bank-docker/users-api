const { authenticate } = require('@feathersjs/authentication').hooks

module.exports = {
  before: {
    all: [],
    find: [authenticate('admin')],
    get: [authenticate('admin')],
    create: [],
    update: [authenticate('admin')],
    patch: [authenticate('admin')],
    remove: [authenticate('admin')]
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
