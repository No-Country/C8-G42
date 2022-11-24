const express = require("express");
const router = express.Router();
const shelterController = require("../../controllers/shelters");
const schemaValidator = require("../../middlewares/schema.validator");
const {
  createShelterSchema, getShelterSchema, updateShelterSchema
} = require("../../schemas/shelter.schema");

router.get("/", async (req, res, next) => {
  try {
    const { limit, offset } = req.query;
    const shelters = await shelterController.get(limit, offset);
    return res.status(200).json(shelters);
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
      return res.status(200).json(user);
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
      return res.status(201).json(newShelter);
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
      return res.status(200).json(updatedShelter);
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
      return res.status(200).json(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
