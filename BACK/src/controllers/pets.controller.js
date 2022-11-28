//models
const { FavoritePet } = require("../persistence/models/favoritePet.model");

const service = require("./services");
const modelName = "Pet";
const options = {
  include: ["shelter"],
};

const boom = require("@hapi/boom");
const { Shelter } = require("../persistence/models/shelter.model");

const getAllPets = async (req, res, next) => {
  try {
    const { limit, offsset } = req.query;
    const pets = await service.getAll(modelName, limit, offsset, {
      ...options,
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

const getPetsByShelterId = async (req, res, next) => {
  const { shelter } = req;
  const { limit, offsset } = req.query;

  const pets = await service.getAll(modelName, limit, offsset, {
    where: { shelterId: shelter.id },
  });

  res.status(200).json({
    status: "success",
    data: {
      pets,
    },
  });
};

const createPet = async (req, res, next) => {
  try {
    const petData = req.body;
    const { sessionUser } = req;

    petData.userId = sessionUser.id;

    const shelter = await Shelter.findOne({ where: { id: petData.shelterId } });

    if (!shelter) {
      throw boom.notFound("Shelter Not Found");
    }

    if(sessionUser.id !== shelter.userId){
      throw boom.forbidden("You are not employee of this shelter");
    }

    petData.adoptedDate =
      petData.status === "adopted" ? new Date().toISOString() : null;

    const newPet = await service.create(modelName, petData);

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

    // cannot change shelterId and userId
    petData.shelterId = undefined;
    petData.userId = undefined;

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

    if (pet.status === "adopted") {
      throw boom.badRequest("The pet is already adopted");
    }

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
    const { pet, sessionUser } = req;

    let favoritePet = await FavoritePet.findOne({
      where: { petId: pet.id, userId: sessionUser.id },
      attributes: ["id", "isFavorite"],
    });

    if (!favoritePet) {
      favoritePet = await FavoritePet.create({
        petId: pet.id,
        userId: sessionUser.id,
        isFavorite: true,
      });

      return res.status(201).json({
        status: "success",
        data: {
          favoritePet,
        },
      });
    }

    await favoritePet.update({
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
  getPetsByShelterId
};
