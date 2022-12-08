const boom = require("@hapi/boom");
const { Request } = require("../persistence/models/request.model");

const requestExist = async (req, res, next) => {
  try {
    const { id } = req.params;

    const request = await Request.findOne({ where: { id } });

    if (!request) {
      throw boom.notFound("Request Not Found");
    }

    req.request = request;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { requestExist };
