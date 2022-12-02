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

/*-----------------------------------*/


const genericCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send('Error fetching users');
  } else {
    res.json(result);
  }
};


usersRouter.get("/", async (req, res, next) => {
  try {
    const { limit, offset } = req.query;
    const user = await userController.getAll(limit, offset);
     
    return res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

// Self: route to obtain info from user (Fetch or Create New User)
usersRouter.get("/self", async (req, res, next) => {
  try {
    const user = userController.fetchOrCreateUser(req, genericCallback(res));
    console.log({user})
    return res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

usersRouter.get(
  "/:email",
  schemaValidator(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { email } = req.params;
      const user = await userController.getByEmail(email);
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
      return res.status(201).send(newUser);
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
