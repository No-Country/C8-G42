//models
const service = require("../controllers/services");
const modelName = "Pet";
const options = {
  include: ["shelter"],
};

const boom = require("@hapi/boom");

const petExist = async (req, res, next) => {
  try {
    const { id, petId } = req.params;

    const pet = await service.getById(id || petId, modelName, options);

    if (!pet) {
      throw boom.notFound("Pet Not Found");
    }

    req.pet = pet;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { petExist };
