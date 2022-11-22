const express = require("express");
const router = express.Router();
const shelterController = require("../../controllers/shelters");
const schemaValidator = require("../../middlewares/schema.validator");
const {
  createShelterSchema, getShelterSchema, updateShelterSchema
} = require("../../schemas/shelter.schema");

router.get("/", async (req, res, next) => {
  try {
    const shelters = await shelterController.get();
    return res.status(200).send(shelters);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  schemaValidator(getShelterSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await shelterController.getById(id);
      return res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  schemaValidator(createShelterSchema, "body"),
  async (req, res, next) => {
    try {
      const shelterData = req.body;
      const newShelter = await shelterController.create(shelterData);
      return res.status(200).send(newShelter);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  schemaValidator(getShelterSchema, "params"),
  schemaValidator(updateShelterSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const shelterData = req.body;
      const updatedShelter = await shelterController.update(id, shelterData);
      return res.status(200).send(updatedShelter);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  schemaValidator(getShelterSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await shelterController.delete(id);
      return res.status(200).send(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
