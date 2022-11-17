const { Shelter } = require("../persistence/models/shelter.model");
const boom = require("@hapi/boom");

const shelterExist = async (req, res, next) => {
  try {
    const { id, shelterId } = req.params;

    const shelter = await Shelter.findOne({ where: { id: id || shelterId } });

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
