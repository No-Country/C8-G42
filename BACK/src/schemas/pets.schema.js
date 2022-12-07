const Joi = require("joi");

const sized = ["small", "medium", "large"];
const statuses = ["adopted", "available", "inProgress"];

const id = Joi.number().integer(),
  petId = id;

const name = Joi.string().min(3).max(20);
const breed = Joi.string().min(3).max(20);
const weight = Joi.number().min(0);
const size = Joi.string().valid(...sized);
const description = Joi.string().min(10);
const isSterilized = Joi.boolean();
const image = Joi.string().uri();
const status = Joi.string().valid(...statuses);
const isVisible = Joi.boolean();
const family = Joi.string().min(1);

const verifyCreatePet = Joi.object({
  name: name.required(),
  breed: breed.required(),
  weight: weight.required(),
  size: size.required(),
  family: family.required(),
  description: description.required(),
  isSterilized: isSterilized.required(),
  image,
  status: status.required(),
  isVisible: isVisible.required(),
});

const verifyPetParamsId = Joi.object({
  id,
  petId,
});

const verifyUpdatePet = Joi.object({
  name,
  breed,
  weight,
  size,
  description,
  isSterilized,
  image,
  status,
  isVisible,
  family,
});

module.exports = { verifyCreatePet, verifyPetParamsId, verifyUpdatePet };
