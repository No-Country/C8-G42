const boom = require('@hapi/boom');

function schemaValidator(schema, property) {
  return (req, res, next) => {
    //la inf. puede venir en body, params o query
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      throw boom.badRequest(error);
    }
    next();
  }
};

module.exports = schemaValidator;