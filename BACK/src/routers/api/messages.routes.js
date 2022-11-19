const express = require("express");
const router = express.Router();
const messageController = require("../../controllers/messages");
const schemaValidator = require("../../middlewares/schema.validator");
const {
  createMessageSchema, getChatSchema
} = require("../../schemas/messages.schema");

router.get(
  "/",
  schemaValidator(getChatSchema, "body"),
  async (req, res, next) => {
    try {
      const { userId, shelterId } = req.body;
      const chat = await messageController.getChat(userId, shelterId);
      return res.status(200).json(chat);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  schemaValidator(createMessageSchema, "body"),
  async (req, res, next) => {
    try {
      const messageData = req.body;
      const newMessage = await messageController.create(messageData);
      return res.status(201).json(newMessage);
    } catch (error) {
      next(error);
    }
  }
);

// router.delete(
//   "/:id",
//   schemaValidator(getShelterSchema, "params"),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const rta = await shelterController.delete(id);
//       return res.status(200).send(rta);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

module.exports = router;
