const { db } = require("../../utils/database.util");
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { sendMail } = require("../../utils/sendMail");
const service = require("./services")
const modelName = "User";
const options = {
  include: ["shelter", "pet"]
}

module.exports = {
  getAll: async (limit, offset) => {
    const users = await service.getAll(modelName, limit, offset, options);
    for (const user of users) {
      delete user.dataValues.password;
    }
    return users;
  },
  getById: async (id) => {
    const row = await service.getById(id, modelName, options);
    return row;
  },
  create: async (userData) => {
    const hash = await bcrypt.hash(userData.password, 10);
    const newUser = await service.create(modelName, {
      ...userData,
      password: hash
    });
    if (newUser) {
      await sendMail(
        userData.email,
        "New Account",
        `Hello ${userData.firstName}, welcome to Huellitas`
      );
      delete newUser.dataValues.password
      return newUser;
    }
  },
  update: async (id, userData, modifiedBy) => {
    const updatedUser = await service.update(id, modelName, {
      ...userData,
      modifiedBy: modifiedBy | userData.id
    })
    return updatedUser;
  },
  delete: async (id) => {
    const rta = await service.delete(id, modelName);
  },
};
