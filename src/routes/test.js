const router = require('express').Router();
const controller = require('../controllers');


// routing test message
router.get("/", (req, res) => {
    controller.displayTestRouteMessage(res, "James I. Bond");
});



module.exports = router;