const createParamsValidator =
  (reqParams = [], reqBody) =>
  (req, res, next) => {
    const missingParams = reqParams.filter((param) => {
      return !Reflect.has(req[reqBody], param);
    });

    if (missingParams.length > 0) {
      throw Error("error in the request");
    }

    next();
  };


const reqComponents = {
  PARAMS: "params",
  QUERY: "query",
  BODY: "body"
}  

module.exports = { createParamsValidator, reqComponents };
