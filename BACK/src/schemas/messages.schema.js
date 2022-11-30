const Joi = require("joi");
const sender = ["user", "admin", "shelterOwner"];

const id = Joi.number().integer().required();
const text = Joi.string().min(1).max(255).required();
const modifiedBy = Joi.string().valid(...sender).required();
const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createMessageSchema = Joi.object({
  userId: id,
  shelterId: id,
  text,
  modifiedBy
});

const getChatSchema = Joi.object({
  userId: id,
  shelterId: id,
  limit: limit,
  offset: offset
});

const getMessageSchema = Joi.object({
  id
})

module.exports = { createMessageSchema, getChatSchema, getMessageSchema };
