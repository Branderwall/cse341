// routing test message
const user = require("./user");

const displayTestRouteMessage = (message) => {
    const displayMessage = (req, res) => {
        res.send(message);
    };
    return displayMessage;
};

module.exports = { displayTestRouteMessage, user };
