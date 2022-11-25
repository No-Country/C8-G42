const boom = require("@hapi/boom");
const services = require("../controllers/services");
const modelName = "Shelter";
const options = {
  include: ["pet"],
};

const shelterExist = async (req, res, next) => {
  try {
    const { id, shelterId } = req.params;

    const shelter = await services.getById(id || shelterId, modelName, options);

    if (!shelter) {
      throw boom.notFound("Shelter Not Found");
    }

    req.shelter = shelter;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { shelterExist };
