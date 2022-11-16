//models
const { Pet } = require("../persistence/models/pet.model");

const getAllPets = async (req, res, next) => {
  try {
    const pets = await Pet.findAll({ where: { isVisible: true } });

    res.status(200).json({
      status: "success",
      data: {
        pets,
      },
    });
  } catch (error) {
    next(error);
  }
};

const createPet = async (req, res, next) => {
  try {
    const { name, breed, weight, size, description, isSterilized } = req.body;
    const { shelterId } = req.params;

    const newPet = await Pet.create({
      name,
      breed,
      weight,
      size,
      description,
      isSterilized,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllPets, createPet };
