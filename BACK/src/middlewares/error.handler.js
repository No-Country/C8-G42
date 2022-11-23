const boom = require("@hapi/boom");

function logErrors(err, req, res, next) {
  console.log(err)
  next(err);
}


function sequelizeErrorHandler (err, req, res, next) {
  if (err.message === "Validation error"){
    const { errors } = err
    throw boom.badRequest(errors[0].message);
  }
  next(err)
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
};

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};


module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
  sequelizeErrorHandler
};
