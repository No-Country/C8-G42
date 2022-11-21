const { db } = require('../../utils/database.util');
const boom = require('@hapi/boom');
const bcrypt = require("bcrypt");

const getById = async(id) => {
    const user = await db.models.user.findByPk(id, {
      include: ['shelter']
    });
    if(user) {
      return user;
    } else {
      throw boom.notFound('User Not Found')
    }
  }

module.exports = {
  get: async () => {
    const users = await db.models.user.findAll();
    for (const user of users) {
      delete user.dataValues.password
    }
    return users;
  },
  getById,
  create: async (userData) => {
    const hash = await bcrypt.hash(userData.password, 10);
    const newUser = await db.models.user.create({
      ...userData,
      password: hash
    });
    
    return newUser;
  },
  update: async (id, userData, modifiedBy) => {
    const user = await getById(id);
    const match = await bcrypt.compare(userData.password, user.password);

    if (match) {
      const newData = {
        ...user.dataValues,
        ...userData,
        modifiedBy
      };

      let password
      if(userData.newPassword){
        const newHash = await bcrypt.hash(userData.newPassword, 10);
        password = newHash;
      } else {
        password = user.dataValues.password
      }
      newData.password = password

      const updatedUser = await user.update(newData)

      return updatedUser;
    } else {
      throw boom.unauthorized('Invalid password')
    }
    // const updatedUser = user.update(userData);
  },
  delete: async (id) => {
    const rta = await db.models.user.destroy({
      where: {
        id
      }
    });
    if (rta !== 0) return({message: 'Deleted'})
    else throw boom.notFound('User not found');
  }
}
