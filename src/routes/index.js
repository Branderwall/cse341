const router = require("express").Router();

// **** Router Directory ****
const testRouter = require('./test');
router.use('/test', testRouter);



//test message for root route
router.get("/", (req, res) => {
    controller.displayTestRouteMessage(res, "Joanne Tan");
});


module.exports = router;
