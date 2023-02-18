const controller = require("../controllers");
const router = require("express").Router();
const apidocs = require("./apidocs");
const auth = require("./auth");

var userProfile;

// **** Router Directory ****
router.use("/", apidocs);
router.get("/", auth.loadLogin);
// router.get("/", controller.displayTestRouteMessage("Home Page"));
router.use("/blog", require("./blog"));

// Auth Routes
router.get("/auth/google", auth.login);
router.get("/auth/google/callback", auth.callbackError, auth.callbackSuccess);
router.get("/success", auth.loginSuccess);
router.get("/error", auth.loginError);

module.exports = router;
