const controller = require("../controllers");
const router = require("express").Router();

// const mongodb = require("../db/connect");


// **** Router Directory ****
router.get("/", controller.displayTestRouteMessage("Joanne Tan"));
// router.get("/user", controller.getUser());
router.use("/test", require("./test"));

module.exports = router;
