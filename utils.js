const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
let mongoConnectionObj = null;

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500 
};

async function connectToDb() {
    try {
        if (!mongoConnectionObj) {
            const client = new MongoClient(url, options);
            mongoConnectionObj = await client.connect();
            console.log("MongoDB connection established");
        }
        return mongoConnectionObj;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

module.exports = { connectToDb };
