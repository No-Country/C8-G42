const jwt_decode = require('jwt-decode');

const { db } = require('../../utils/database.util');
const boom = require('@hapi/boom');
const bcrypt = require("bcrypt");

const getById = async (id) => {
  const user = await db.models.user.findByPk(id, {
    include: ['shelter']
  });
  if (user) {
    return user;
  } else {
    throw boom.notFound('User Not Found');
  }
};

const fetchOrCreateUser = async (req, callback) => {
  // 6.1. Fetching User data FROM Auth0 Token (Token comming from Frontend)
  const token = req.headers.authorization.split('Bearer ')[1];
  const user = jwt_decode(token)['http://localhost/userData'];
  // console.log(user);

  // 6.2. Verifying if User not exists in DB (with email) it will create it, otherwise user will be returned 
  const [userFoundOrCreated, created] = await db.models.user.findOrCreate({
    where: {
      email: user.email
    },
    defaults: {
      firstName: user.given_name || user.name,
      lastName: user.family_name || "without lastName",
      password: "$$--auth0--$$",
      address: "--change address--",
      avatar: user.picture,
      phone: "0000000000",
      modifiedBy: user._id,
      isDark: false
    },
  });

  // console.log("userFoundOrCreated: ", userFoundOrCreated);
  // console.log("user was created?: ", created);
  
    callback(null, userFoundOrCreated); 
};

module.exports = {
  get: async () => {
    const users = await db.models.user.findAll();
    return users;
  },
  fetchOrCreateUser,
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

      let password;
      if (userData.newPassword) {
        const newHash = await bcrypt.hash(userData.newPassword, 10);
        password = newHash;
      } else {
        password = user.dataValues.password;
      }
      newData.password = password;

      const updatedUser = await user.update(newData);

      return updatedUser;
    } else {
      throw boom.unauthorized('Invalid password');
    }
    // const updatedUser = user.update(userData);
  },
  delete: async (id) => {
    const rta = await db.models.user.destroy({
      where: {
        id
      }
    });
    if (rta !== 0) return ({ message: 'Deleted' });
    else throw boom.notFound('User not found');
  }
};
