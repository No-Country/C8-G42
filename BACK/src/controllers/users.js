const { db } = require('../../utils/database.util');
const boom = require('@hapi/boom');

const getById = async(id) => {
    const user = await db.models.user.findByPk(id);
    if(user) {
      return user;
    } else {
      throw boom.notFound('User Not Found')
    }
  }

module.exports = {
  get: async () => {
    const users = await db.models.user.findAll();
    return users;
  },
  getById,
  create: async (userData) => {
    const newUser = await db.models.user.create(userData);
    return newUser;
  },
  update: async (id, userData) => {
    const user = await getById(id);
    const updatedUser = user.update(userData);
    return(updatedUser);
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
