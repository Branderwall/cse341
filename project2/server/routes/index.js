const controller = require("../controllers");
const router = require("express").Router();
const apidocs = require("./apidocs");
const auth0 = require("./auth0");
const { requiresAuth } = require('express-openid-connect');
const { auth } = require('express-openid-connect');


// **** Router Directory ****/
router.use("/", apidocs);
router.use(auth(auth0.authConfig));

// router.get("/", controller.displayTestRouteMessage("Home Page"));
router.use("/blog", requiresAuth(), require("./blog"));
router.use("/user", requiresAuth(), require("./user"));


/** Auth Routing **/
router.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});
router.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});







module.exports = router;


