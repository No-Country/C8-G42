const { User, userSchema } = require("./user.model");
const { Shelter, shelterSchema } = require("./shelter.model");
const { Message, messageSchema } = require("./message.model");
const { Pet, petSchema } = require("./pet.model");
const { FavoritePet, favoritePetSchema } = require("./favoritePet.model");
const { Report, reportSchema } = require("./report.model");
const { Request, requestSchema } = require("./request.model");

const setupModels = (sequelize) => {
  User.init(userSchema, User.config(sequelize));
  Shelter.init(shelterSchema, Shelter.config(sequelize));
  Message.init(messageSchema, Message.config(sequelize));
  Pet.init(petSchema, Pet.config(sequelize));
  FavoritePet.init(favoritePetSchema, FavoritePet.config(sequelize));
  Report.init(reportSchema, Report.config(sequelize));
  Request.init(requestSchema, Request.config(sequelize));
  
  User.associate(sequelize.models);
  Shelter.associate(sequelize.models);
  Message.associate(sequelize.models);
  Pet.associate(sequelize.models);
  FavoritePet.associate(sequelize.models);
  Report.associate(sequelize.models);
  Request.associate(sequelize.models);
};

module.exports = { setupModels };
