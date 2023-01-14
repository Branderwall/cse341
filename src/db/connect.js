const dotenv = require("dotenv");
dotenv.config();

const mongoClient = require("mongodb").MongoClient;

const mongoURL = process.env.MONGODB_URI;

let _db;

const initDB = (callback) => {
    if (_db) {
        console.log("DB is already initialized!");
        return callback(null, _db);
    }
    mongoClient
        .connect(mongoURL)
        .then((client) => {
            _db = client;
            callback(null, _db);
            console.log("DB is connected");
        })
        .catch((err) => {
            callback(err);
        });
};

const getDB = () => {
    if (!_db) {
        throw Error("DB not initialized");
    }
    return _db;
};

module.exports = {
    initDB,
    getDB,
};
