const httpError = require("http-errors");

const buildApiHandler = require("../api-utils/buildApiHandler");
const paramsValidator = require("../middlewares/params-validator");
const urlService = require("./url.service");
const urlUtils = require("./url.utils");
const config = require("../config");

async function controller(req, res) {
  const { link } = req.body;

  const encryptedUrl = urlUtils.encryptUrl(link);
  const sendableLink = urlUtils.makeLink(encryptedUrl)
  
  res.status(200).send(sendableLink)

}



const createParamsValidator = paramsValidator.createParamsValidator(
  ["link"],
  paramsValidator.reqComponents.BODY
);

module.exports = buildApiHandler([createParamsValidator, controller]);
