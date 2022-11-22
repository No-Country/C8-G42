//models
const { Pet } = require("../persistence/models/pet.model");

const boom = require("@hapi/boom");

const petExist = async (req, res, next) => {
  try {
    const { id, petId } = req.params;

    const pet = await Pet.findOne({
      where: { id: id || petId },
    });

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
