const mongodb = require("mongodb");

const config = require("../config");

const client = new mongodb.MongoClient(config.MONGODB_URI);

let database = null;

async function initialize() {
  await client.connect();

  database = client.db(config.DB_NAME);
}

function getCollection(collectionName) {
  return database.collection(collectionName);
}

module.exports = {
  initialize,
  getCollection,
};
