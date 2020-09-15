const API_HOST = 'http://localhost:3030'
const TOKEN_ENDPOINT = ''
const CLIENT_ID = ''
const CLIENT_SECRET = ''

function create (user, callback) {
  // This script should create a user entry in your existing database. It will
  // be executed when a user attempts to sign up, or when a user is created
  // through the Auth0 dashboard or API.
  // When this script has finished executing, the Login script will be
  // executed immediately afterwards, to verify that the user was created
  // successfully.
  //
  // The user object will always contain the following properties:
  // * email: the user's email
  // * password: the password entered by the user, in plain text
  // * tenant: the name of this Auth0 account
  // * client_id: the client ID of the application where the user signed up, or
  //              API key if created through the API or Auth0 dashboard
  // * connection: the name of this database connection
  //
  // There are three ways this script can finish:
  // 1. A user was successfully created
  //     callback(null);
  // 2. This user already exists in your database
  //     callback(new ValidationError("user_exists", "my error message"));
  // 3. Something went wrong while trying to reach your database
  //     callback(new Error("my error message"));

  const axios = require('axios@0.19.2')
  axios.post(TOKEN_ENDPOINT, {
    audience: API_HOST,
    grant_type: 'client_credentials',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET
  }).then(({ data }) => {
    const headers = { Authorization: `${data.token_type} ${data.access_token}` }
    return axios.post(`${API_HOST}/users`, user, { headers })
  }).then(() => callback(null)).catch(err => callback(err))
}
