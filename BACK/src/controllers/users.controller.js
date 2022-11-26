const jwt_decode = require("jwt-decode");
const { sendMail } = require("../../utils/sendMail");
const service = require("./services");
const modelName = "User";
const boom = require("@hapi/boom");
const { models } = require("../../utils/database.util");

const options = {
  include: ["shelter", "pet"],
};

const getById = async (id) => {
  const user = await models.User.findByPk(id, {
    include: ["shelter"],
  });
  if (user) {
    return user;
  } else {
    throw boom.notFound("User Not Found");
  }
};

const fetchOrCreateUser = async (req, callback) => {
  // 6.1. Fetching User data FROM Auth0 Token (Token comming from Frontend)
  const token = req.headers.authorization.split("Bearer ")[1];
  const user = jwt_decode(token)["http://localhost/userData"];
  // console.log(user);

  // 6.2. Verifying if User not exists in DB (with email) it will create it, otherwise user will be returned
  const [userFoundOrCreated, created] = await models.User.findOrCreate({
    where: {
      email: user.email,
    },
    defaults: {
      firstName: user.given_name || user.name,
      lastName: user.family_name || "without lastName",
      avatar: user.picture,
      modifiedBy: user._id,
      isDark: false,
    },
  });

  // console.log("userFoundOrCreated: ", userFoundOrCreated);
  // console.log("user was created?: ", created);
  sendMail(user.email, "Welcome!!!", `Welcome ${user.name} to huellitas`);
  callback(null, userFoundOrCreated);
};

module.exports = {
  getAll: async (limit, offset) => {
    const users = await service.getAll(modelName, limit, offset, options);
    return users;
  },
  fetchOrCreateUser,
  getById,
  update: async (id, userData, modifiedBy) => {
    const updatedUser = await service.update(id, modelName, {
      ...userData,
      modifiedBy: modifiedBy | userData.id,
    });
    return updatedUser;
  },
  delete: async (id) => {
    const rta = await service.delete(id, modelName);
  },
};
