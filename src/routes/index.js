const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.send("James I. Bond");
});

routes.get("/test1", (req, res) => {
    res.send("Joanne Tan");
});

module.exports = routes;
