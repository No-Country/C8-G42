const Joi = require("joi");

const id = Joi.number().integer();
const message = Joi.string().min(1).max(255);
const status = Joi.string().valid("pending", "resolved");
const modifiedBy = Joi.number().integer();

const createRequestSchema = Joi.object({
  userId: id.required(),
  petId: id.required(),
  message: message.required(),
});

const verifyRequestParams = Joi.object({
  id,
});

module.exports = { createRequestSchema, verifyRequestParams };
