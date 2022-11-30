const express = require("express");

//controllers
const {
  getReportByShelterId,
  createReport,
  updateReport,
  deleteReport,
  resolvedReport,
} = require("../../controllers/reports.controller");

//middlewares
//shelter middlware
const { shelterExist } = require("../../middlewares/shelters.middleware");

//report middleware
const { reportExist } = require("../../middlewares/reports.middlware");

//validators
const schemaValidator = require("../../middlewares/schema.validator");
const { verifyShelterParamsId } = require("../../schemas/shelters.schema");
const {
  verifyCreateReport,
  verifyReportParamsId,
} = require("../../schemas/reports.schema");

//auth middleware
const {
  protectSession,
  protectUsersReports,
} = require("../../middlewares/auth0.middleware");

const reportsRouter = express.Router();

reportsRouter.get(
  "/:shelterId",
  schemaValidator(verifyShelterParamsId, "params"),
  shelterExist,
  getReportByShelterId
);

reportsRouter.use(protectSession);

reportsRouter.post(
  "/:shelterId",
  schemaValidator(verifyShelterParamsId, "params"),
  shelterExist,
  schemaValidator(verifyCreateReport, "body"),
  createReport
);

reportsRouter.put(
  "/:id",
  schemaValidator(verifyReportParamsId, "params"),
  reportExist,
  protectUsersReports,
  updateReport
);

reportsRouter.delete(
  "/:id",
  schemaValidator(verifyReportParamsId, "params"),
  reportExist,
  protectUsersReports,
  deleteReport
);

reportsRouter.put(
  "/resolve/:id",
  schemaValidator(verifyReportParamsId, "params"),
  reportExist,
  resolvedReport
);

module.exports = { reportsRouter };
