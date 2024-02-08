const express = require("express");

const router = express.Router();

const insertUrlApi = require("./insertUrl.api");
const redirectUrlApi = require("./redirectUrl.api");


router.post("/", insertUrlApi);
router.get("/:urlLink", redirectUrlApi)


module.exports = router;