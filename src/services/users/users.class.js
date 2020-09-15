const { Service } = require('feathers-mongoose')

exports.Users = class Users extends Service {
  find (params) {
    return super.find(params)
  }
}
