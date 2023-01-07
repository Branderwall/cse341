// routing test message
const displayTestRouteMessage = (message) => {
    const displayMessage = (req, res) => {
        res.send(message);
    };
    return displayMessage
};

module.exports = { displayTestRouteMessage };
