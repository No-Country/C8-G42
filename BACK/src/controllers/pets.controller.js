//models
const { Pet } = require("../persistence/models/pet.model");
const { FavoritePet } = require("../persistence/models/favoritePet.model");

const getAllPets = async (req, res, next) => {
  try {
    const pets = await Pet.findAll({
      where: { isVisible: true },
    });

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

const getPetById = async (req, res, next) => {
  try {
    const { pet } = req;

    res.status(200).json({
      status: "success",
      data: {
        pet,
      },
    });
  } catch (error) {
    next(error);
  }
};

const createPet = async (req, res, next) => {
  try {
    const petData = req.body;
    const { shelter } = req;

    //take user in session
    const user = 1;

    petData.shelterId = shelter.id;
    petData.userId = user.id;

    petData.adoptedDate =
      petData.status === "adopted" ? new Date().toISOString() : null;

    const newPet = await Pet.create(petData);

    res.status(201).json({
      status: "success",
      data: {
        newPet,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updatePet = async (req, res, next) => {
  try {
    const { pet } = req;
    const petData = req.body;

    petData.adoptedDate =
      petData.status === "adopted" ? new Date().toISOString() : null;

    await pet.update(petData);

    res.status(200).json({
      status: "success",
      data: {
        pet,
      },
    });
  } catch (error) {
    next(error);
  }
};

const deletePet = async (req, res, next) => {
  try {
    const { pet } = req;
    await pet.destroy();

    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};

const adoptPet = async (req, res, next) => {
  try {
    const { pet } = req;

    await pet.update({
      status: "adopted",
      adoptedDate: new Date().toISOString(),
    });

    res.status(200).json({
      status: "success",
      data: {
        pet,
      },
    });
  } catch (error) {
    next(error);
  }
};

const toogleFavoritePet = async (req, res, next) => {
  try {
    const { pet } = req;
    //take user in session
    const user = 1;

    let favoritePet = await FavoritePet.findOne({
      where: { petId: pet.id, userId: user.id },
      attributes: ["id", "isFavorite"],
    });

    if (!favoritePet) {
      favoritePet = await FavoritePet.create({
        petId: pet.id,
        userId: user.id,
        isFavorite: true,
      });

      return res.status(201).json({
        status: "success",
        data: {
          favoritePet,
        },
      });
    }

    favoritePet = await FavoritePet.update({
      isFavorite: !favoritePet.isFavorite,
    });

    res.status(200).json({
      status: "success",
      data: {
        favoritePet,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
  adoptPet,
  toogleFavoritePet,
};
