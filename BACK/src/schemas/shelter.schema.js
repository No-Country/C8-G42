const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(20);
const address = Joi.string().min(3).max(255);
const phone = Joi.string()
  .length(10)
  .pattern(/^[0-9]+$/);
const avatar = Joi.string().uri();
const ownerId = Joi.number().integer();
const modifiedBy = Joi.number().integer();

const createShelterSchema = Joi.object({
  name: name.required(),
  address: address.required(),
  phone: phone.required(),
  avatar,
  ownerId: ownerId.required()
});

const getShelterSchema = Joi.object({
  id
});

const updateShelterSchema = Joi.object({
  name,
  address,
  phone,
  avatar,
  ownerId,
  modifiedBy
})

module.exports = { createShelterSchema, getShelterSchema, updateShelterSchema };
