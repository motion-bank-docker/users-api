const admins = require('./admins/admins.service.js')
const users = require('./users/users.service.js')
const keys = require('./keys/keys.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(admins)
  app.configure(users)
  app.configure(keys);
}
