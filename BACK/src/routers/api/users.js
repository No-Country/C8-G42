const express = require("express");
const router = express.Router();
const userController = require("./../../controllers/users");
const schemaValidator = require("../../middlewares/schema.validator");
const {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
} = require("./../../schemas/user.schema");

/*-------Auth0 (verify token with midlleware)------------------------*/
const { auth } = require('express-oauth2-jwt-bearer');

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: 'api-autenticacion-huellitas',
  issuerBaseURL: `https://huellitas-auth.us.auth0.com/`,
});
/*-----------------------------------*/


router.get("/",checkJwt,async (req, res, next) => {
  try {
    const user = await userController.get();
    return res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  schemaValidator(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await userController.getById(id);
      return res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  schemaValidator(createUserSchema, "body"),
  async (req, res, next) => {
    try {
      const userData = req.body;
      const newUser = await userController.create(userData);
      return res.status(200).send(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  schemaValidator(getUserSchema, "params"),
  schemaValidator(updateUserSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await userController.update(id, userData);
      return res.status(200).send(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
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

module.exports = router;
