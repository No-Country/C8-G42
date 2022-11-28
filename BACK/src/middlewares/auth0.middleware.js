const { auth } = require("express-oauth2-jwt-bearer");
const boom = require("@hapi/boom");
const jwt_decode = require("jwt-decode");
const { User } = require("../persistence/models/user.model");

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: "api-autenticacion-huellitas",
  issuerBaseURL: `https://huellitas-auth.us.auth0.com/`,
});

const protectSession = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    const user = jwt_decode(token)["http://localhost/userData"];

    const userInDb = await User.findOne({ where: { email: user.email } });

    if (!userInDb) {
      throw boom.notFound("User Not found");
    }

    req.sessionUser = userInDb.dataValues;
    next();
  } catch (error) {
    next(error);
  }
};

const protectUsersPets = (req, res, next) => {
  const { sessionUser, pet } = req;

  if (sessionUser.id !== pet.userId) {
    throw boom.unauthorized("Your are not the owner of this pet");
  }

  next();
};

const protectUsersReports = (req, res, next) => {
  const { sessionUser, report } = req;

  if (sessionUser.id !== report.userId) {
    throw boom.unauthorized("Your are not the owner of this report");
  }

  next();
};

const protectAdmin = (req, res, next) => {
  const { sessionUser } = req;

  if (sessionUser.role !== "admin") {
    throw boom.unauthorized("You do not have the right access level.");
  }

  next();
};

module.exports = {
  checkJwt,
  protectSession,
  protectAdmin,
  protectUsersPets,
  protectUsersReports,
};
