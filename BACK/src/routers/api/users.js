const express = require("express");
const router = express.Router();
const userController = require("./../../controllers/users");
const schemaValidator = require("../../middlewares/schema.validator");
const { createUserSchema } = require("./../../schemas/user.schema")

router.get("/", async (req, res, next) => {
  try {
    const user = await userController.get();
    return res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userController.getById(id);
    return res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

router.post("/",
  schemaValidator(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const userData = req.body;
      const newUser = await userController.create(userData);
      return res.status(200).send(newUser);
    } catch (error) {
      next(error);
    }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const updatedUser = await userController.update(id, userData);
    return res.status(200).send(updatedUser);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await userController.delete(id);
    return res.status(200).send(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
