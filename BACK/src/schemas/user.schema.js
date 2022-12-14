const Joi = require("joi");

const id = Joi.number().integer();
const firstName = Joi.string().min(3).max(20);
const lastName = Joi.string().min(3).max(20);
const email = Joi.string().email();
const address = Joi.string().min(3).max(255);
const avatar = Joi.string().uri();
const phone = Joi.string()
  .length(10)
  .pattern(/^[0-9]+$/);
const isDark = Joi.boolean();

const createUserSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  email: email.required(),
  address: address.required(),
  avatar,
  phone: phone.required(),
  isDark,
});

const getUserSchema = Joi.object({
  email: email.required(),
});

const updateUserSchema = Joi.object({
  firstName,
  lastName,
  email,
  address,
  avatar,
  phone,
  isDark
})

module.exports = { createUserSchema, getUserSchema, updateUserSchema };
