const buildApihandler = require("../api-utils/buildApiHandler");
const urlUtils = require("./url.utils");
const paramsValidator = require("../middlewares/params-validator");

async function controller(req, res) {
  const { urlLink } = req.params;

  const decryptUrlLink = urlUtils.decryptUrl(urlLink);

  res.redirect(decryptUrlLink)
  
}

module.exports = buildApihandler([controller]);
