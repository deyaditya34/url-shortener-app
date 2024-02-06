function buildApiHandler(handlers = []) {
  return handlers.map((handlerFn) => wrapErrorHandler(handlerFn));
}

const wrapErrorHandler = (apiHandler) => async (req, res, next) => {
  try {
    await apiHandler(req, res, next);
  } catch (err) {
    next(err);
  }
};


module.exports = buildApiHandler