const express = require("express");
const usersRouter = express.Router();
const userController = require("../../controllers/users.controller");
const schemaValidator = require("../../middlewares/schema.validator");
const {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
} = require("../../schemas/user.schema");

/*-------Auth0 (verify token with midlleware)------------------------*/
const { auth } = require('express-oauth2-jwt-bearer');

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: 'api-autenticacion-huellitas',
  issuerBaseURL: `https://huellitas-auth.us.auth0.com/`,
});
/*-----------------------------------*/

const genericCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send('Error fetching users');
  } else {
    res.json(result);
  }
};


usersRouter.get("/", checkJwt, async (req, res, next) => {
  try {
    const user = await userController.get();
    return res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

// Self: route to obtain info from user (Fetch or Create New User)
usersRouter.get("/self", checkJwt, async (req, res, next) => {
  try {
    userController.fetchOrCreateUser(req, genericCallback(res));
    // return res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

usersRouter.get(
  "/:id",
  schemaValidator(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await userController.getById(id);
      delete user.dataValues.password
      return res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
);

usersRouter.post(
  "/",
  schemaValidator(createUserSchema, "body"),
  async (req, res, next) => {
    try {
      const userData = req.body;
      const newUser = await userController.create(userData);
      delete newUser.dataValues.password
      return res.status(200).send(newUser);
    } catch (error) {
      next(error);
    }
  }
);

usersRouter.put(
  "/:id",
  schemaValidator(getUserSchema, "params"),
  schemaValidator(updateUserSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await userController.update(id, userData, id);
      delete updatedUser.dataValues.password
      return res.status(200).send(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);

usersRouter.delete(
  "/:id",
  schemaValidator(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await userController.delete(id);
      return res.status(200).send(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = usersRouter;
