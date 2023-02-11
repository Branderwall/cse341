const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// const mongoClient = require("mongodb").MongoClient;

const mongoURL = process.env.MONGODB_URI;

let _db;

const initDB = (callback) => {
    if (_db) {
        console.log("DB is already initialized!");
        return callback(null, _db);
    }
    mongoose.set('strictQuery', false);
    mongoose.set('sanitizeFilter', true);
    mongoose
        .connect(mongoURL)
        .then(() => {
            _db = mongoose.connection;
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
