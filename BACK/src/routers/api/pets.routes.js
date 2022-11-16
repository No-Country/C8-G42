const express = require("express");

//controllers
const { getAllPets, createPet } = require("../../controllers/pets.controller");

//shelter middlewares
const { shelterExist } = require("../../middlewares/shelters.middleware");

const petsRouter = express.Router();

petsRouter.get("/", getAllPets);

petsRouter.post("/:shelterId", shelterExist, createPet);

module.exports = { petsRouter };
