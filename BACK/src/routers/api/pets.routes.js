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

//User middlewares
const { fetchOrCreateUser } = require("../../controllers/users.controller");

const petsRouter = express.Router();

petsRouter.get("/", getAllPets);

petsRouter.get(
  "/:id",
  schemaValidator(verifyPetParamsId, "params"),
  petExist,
  getPetById
);

//doesnt work need auth to get userId
petsRouter.post(
  "/:shelterId",
  fetchOrCreateUser,
  schemaValidator(verifyShelterParamsId, "params"),
  shelterExist,
  schemaValidator(verifyCreatePet, "body"),
  createPet
);

petsRouter.put(
  "/:id",
  schemaValidator(verifyPetParamsId, "params"),
  petExist,
  schemaValidator(verifyUpdatePet, "body"),
  updatePet
);

petsRouter.delete(
  "/:id",
  schemaValidator(verifyPetParamsId, "params"),
  petExist,
  deletePet
);

petsRouter.put(
  "/adopt/:id",
  schemaValidator(verifyPetParamsId, "params"),
  petExist,
  adoptPet
);

petsRouter.post(
  "/favorite/:id",
  schemaValidator(verifyPetParamsId, "params"),
  petExist,
  toogleFavoritePet
);

module.exports = { petsRouter };
