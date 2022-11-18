const { FavoritePet } = require("./favoritePet.model");
const { Message } = require("./message.model");
const { Pet } = require("./pet.model");
const { Report } = require("./report.model");
const { Request } = require("./request.model");
const { Shelter } = require("./shelter.model");
const { User } = require("./user.model");

const initModels = () => {
  //1 User <----> M Shelter
  User.hasMany(Shelter, { foreignKey: "ownerId", as: "shelter" });
  Shelter.belongsTo(User, { foreignKey: "ownerId", as: "user" });

  //M User <-- FavoritePet --> M pet
  User.belongsToMany(Pet, { through: FavoritePet, foreignKey: "userId" });
  Pet.belongsToMany(User, { through: FavoritePet, foreignKey: "petId" });

  //M User <-- Message --> M Shelter
  User.belongsToMany(Shelter, { through: Message, foreignKey: "userId" });
  Shelter.belongsToMany(User, { through: Message, foreignKey: "shelterId" });

  //M User <-- Report --> M Shelter
  User.belongsToMany(Shelter, { through: Report, foreignKey: "userId" });
  Shelter.belongsToMany(User, { through: Report, foreignKey: "shelterId" });

  //M User <-- Request --> M Pet
  User.belongsToMany(Pet, { through: Request, foreignKey: "userId" });
  Pet.belongsToMany(User, { through: Request, foreignKey: "petId" });

  //M User <-- Pet --> M Shelter
  User.belongsToMany(Shelter, { through: Pet, foreignKey: "userId" });
  Shelter.belongsToMany(User, { through: Pet, foreignKey: "shelterId" });
};

module.exports = { initModels };
