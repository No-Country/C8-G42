const { db } = require("../../utils/database.util");
const boom = require("@hapi/boom");
const service = require("./services");
const modelName = "Message"

module.exports = {
  getChat: async (userId, shelterId, limit, offset) => {
    const options = {
      where: {
        userId,
        shelterId
      }
    }
    const chat = await service.getAll(modelName, limit, offset, options);
    return chat
  },
  create: async (messageData) => {
    const newMessage = await service.create(modelName, messageData);
    return newMessage;
  },
  delete: async (id) => {
    const rta = await service.delete(id, modelName);
    return rta
  },
};
