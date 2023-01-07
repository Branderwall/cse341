// Test route for subrouting
const controller = require("../controllers");
const router = require("express").Router();

// routing test message
router.get("/", controller.displayTestRouteMessage("James I. Bond"));

module.exports = router;
