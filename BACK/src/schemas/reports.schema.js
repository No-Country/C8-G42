const Joi = require("joi");

const id = Joi.number().integer(),
  reportId = id;

const message = Joi.string().min(1).max(300).required();

const verifyReportParamsId = Joi.object({
  id,
  reportId,
});

const verifyCreateReport = Joi.object({
  message: message.required(),
});

module.exports = { verifyReportParamsId, verifyCreateReport };
