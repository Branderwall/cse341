const authConfig = {
    authRequired: false,
    auth0Logout: true,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: 'https://' + process.env.ISSUER_BASE_URL,
    secret: process.env.SECRET
  };


module.exports = {
    authConfig,
}