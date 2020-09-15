const { AuthenticationService } = require('@feathersjs/authentication')

const { expressOauth, OAuthStrategy } = require('@feathersjs/authentication-oauth')

module.exports = app => {
  const authentication = new AuthenticationService(app)

  class Auth0Strategy extends OAuthStrategy {
    async getEntityData (profile) {
      const baseData = await super.getEntityData(profile)

      return {
        ...baseData,
        email: profile.email
      }
    }
  }

  authentication.register('admin', new Auth0Strategy())

  app.use('/authentication', authentication)
  app.configure(expressOauth())
}
