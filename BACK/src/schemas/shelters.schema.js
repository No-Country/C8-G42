const Joi = require("joi");

const id = Joi.number().integer(),
  shelterId = id;

const verifyShelterParamsId = Joi.object({
  id,
  shelterId
});

module.exports = { verifyShelterParamsId };
