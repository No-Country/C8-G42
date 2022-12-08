const express = require("express");
const {
  getSheltersRequests,
  resolveRequest,
} = require("../../controllers/requests.controller");
const router = express.Router();
const requestController = require("../../controllers/requests.controller");
const { protectSession } = require("../../middlewares/auth0.middleware");
const { requestExist } = require("../../middlewares/request.middlware");
const schemaValidator = require("../../middlewares/schema.validator");
const {
  createRequestSchema,
  verifyRequestParams,
} = require("../../schemas/request.schema");

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

router.put(
  "/resolve/:id",
  schemaValidator(verifyRequestParams, "params"),
  requestExist,
  resolveRequest
);

module.exports = router;
