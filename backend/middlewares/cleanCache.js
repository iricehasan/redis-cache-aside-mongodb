const { clearHash } = require("../services/cache");

// we only want this middleware to run after request handler
// it should keep the cache if there was an error during request handler
module.exports = async (req, res, next) => {
  await next(); // waits the route handler

  clearHash(req.user.id); // after route handler runs first we clear cache
};
