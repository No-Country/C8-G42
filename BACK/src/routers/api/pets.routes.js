const express = require("express");

//controllers
const {
  getAllPets,
  createPet,
  updatePet,
  deletePet,
  getPetById,
  adoptPet,
  toogleFavoritePet,
  getPetsByShelterId,
} = require("../../controllers/pets.controller");

//shelter middlewares
const { shelterExist } = require("../../middlewares/shelters.middleware");

//Joi validators
const schemaValidator = require("../../middlewares/schema.validator");
const { verifyShelterParamsId } = require("../../schemas/shelters.schema");
const {
  verifyCreatePet,
  verifyUpdatePet,
  verifyPetParamsId,
} = require("../../schemas/pets.schema");

//pet middlewares
const { petExist } = require("../../middlewares/pets.middleware");

//auth middlewares
const {
  protectSession,
  protectUsersPets,
} = require("../../middlewares/auth0.middleware");

const petsRouter = express.Router();

petsRouter.get("/", getAllPets);

petsRouter.get(
  "/:id",
  schemaValidator(verifyPetParamsId, "params"),
  petExist,
  getPetById
);

petsRouter.get(
  "/shelter/:shelterId",
  schemaValidator(verifyShelterParamsId, "params"),
  shelterExist,
  getPetsByShelterId
);

petsRouter.use(protectSession);

petsRouter.post("/", schemaValidator(verifyCreatePet, "body"), createPet);

petsRouter.post(
  "/favorite/:id",
  schemaValidator(verifyPetParamsId, "params"),
  petExist,
  toogleFavoritePet
);

petsRouter.get("/favorite/self", )

petsRouter.put(
  "/:id",
  schemaValidator(verifyPetParamsId, "params"),
  petExist,
  protectUsersPets,
  schemaValidator(verifyUpdatePet, "body"),
  updatePet
);

petsRouter.delete(
  "/:id",
  schemaValidator(verifyPetParamsId, "params"),
  petExist,
  protectUsersPets,
  deletePet
);

petsRouter.put(
  "/adopt/:id",
  schemaValidator(verifyPetParamsId, "params"),
  petExist,
  protectUsersPets,
  adoptPet
);

module.exports = { petsRouter };
