const database = require("../services/database.service");
const config = require("../config");

async function insertUrl(data) {
  return database.getCollection(config.URL_STORE).insertOne(data)
}

module.exports = {
  insertUrl
}
