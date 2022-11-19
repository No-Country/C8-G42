const { db } = require("../../utils/database.util");
const boom = require("@hapi/boom");

module.exports = {
  getChat: async (userId, shelterId) => {
    console.log({userId, shelterId})
    const chat = await db.models.message.findAll({
      where: {
        userId,
        shelterId
      },
      order: [['createdAt']]
    });
    if(chat.length > 0) {
      return chat;
    } else {
      return { message: 'Empty chat'}
    }
  },
  create: async (messageData) => {
    console.log({messageData})
    const newMessage = await db.models.message.create(messageData);
    return newMessage;
  },
  delete: async (id) => {
    const rta = await db.models.message.destroy({
      where: {
        id,
      },
    });
    if (rta !== 0) return { message: "Deleted" };
    else throw boom.notFound("Message not found");
  },
};
