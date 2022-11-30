const express = require("express");
const router = express.Router();
const messageController = require("../../controllers/messages");
const schemaValidator = require("../../middlewares/schema.validator");
const {
  createMessageSchema, getChatSchema, getMessageSchema
} = require("../../schemas/messages.schema");

router.get(
  "/",
  schemaValidator(getChatSchema, "query"),
  async (req, res, next) => {
    try {
      const { userId, shelterId, limit, offset } = req.query;
      const chat = await messageController.getChat(userId, shelterId, limit, offset);
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

router.delete(
  "/:id",
  schemaValidator(getMessageSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await messageController.delete(id);
      return res.status(200).send(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
