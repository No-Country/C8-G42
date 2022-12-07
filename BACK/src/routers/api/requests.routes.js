const express = require("express");
const {
  getSheltersRequests,
} = require("../../controllers/requests.controller");
const router = express.Router();
const requestController = require("../../controllers/requests.controller");
const { protectSession } = require("../../middlewares/auth0.middleware");
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

router.use(protectSession);
//get shelter's request via token if user dont own a shelter send error
router.get("/", getSheltersRequests);

module.exports = router;
