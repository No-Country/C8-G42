const express = require("express");
const router = express.Router();
const requestController = require("../../controllers/requests.controller")
const schemaValidator = require("../../middlewares/schema.validator");
const { createRequestSchema } = require("../../schemas/request.schema");

router.post(
  "/",
  schemaValidator(createRequestSchema, "body"),
  async (req, res, next) => {
    try {
      const requestData = req.body;
      const newRequest = await requestController.create(requestData);
      return res.status(201).json(newRequest);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
