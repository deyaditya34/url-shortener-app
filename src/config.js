require("dotenv").config();

module.exports = {
  MONGODB_URI : process.env.MONGODB_URI,
  DB_NAME : process.env.DB_NAME,
  PORT : process.env.PORT,
  URL_STORE: process.env.COLLECTION_NAME_URL
}