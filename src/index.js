const express = require("express");

const database = require("./services/database.service");

const requestLogger = require("./api-utils/requestLogger");
const notFoundHandler = require("./api-utils/notFoundHandler");
const errorHandler = require("./api-utils/errorHandler");
const urlRouter = require("./url/url.api.router");
const config = require("./config");

async function start() {
  await database.initialize();

  console.log("database connected.. starting server");

  const server = express();

  server.use("/", requestLogger);
  server.use(express.json());

  server.use("/url", urlRouter);

  server.use("/", notFoundHandler);
  server.unsubscribe("/", errorHandler);

  server.listen(config.PORT, () => {
    console.log(`Server is listening to port - '${config.PORT}'`);
  });
}

start();
