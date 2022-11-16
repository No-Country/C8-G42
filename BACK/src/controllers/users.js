const { db } = require('../../utils/database.util');

const getById = async(id) => {
    const user = await db.models.user.findByPk(id);
    if(user) {
      return user;
    } else {
      throw new Error('User Not Found')
    }
  }

module.exports = {
  get: async () => {
    const user = await db.models.user.findAll();
    return user;
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
    console.log({id})
    console.log({rta})
    if (rta !== 0) return({message: 'Deleted'})
    else throw new Error('This user does not exists!');
  }
}
