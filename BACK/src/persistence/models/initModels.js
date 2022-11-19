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
  User.belongsToMany(Pet, {
    through: { model: FavoritePet, unique: false },
    foreignKey: "userId",
    constraints: false,
  });
  Pet.belongsToMany(User, {
    through: { model: FavoritePet, unique: false },
    foreignKey: "petId",
    constraints: false,
  });

  //M User <-- Message --> M Shelter
  User.belongsToMany(Shelter, {
    through: { model: Message, unique: false },
    foreignKey: "userId",
    constraints: false,
  });
  Shelter.belongsToMany(User, {
    through: { model: Message, unique: false },
    foreignKey: "shelterId",
    constraints: false,
  });

  //M User <-- Report --> M Shelter
  User.belongsToMany(Shelter, {
    through: { model: Report, unique: false },
    foreignKey: "userId",
    constraints: false,
  });
  Shelter.belongsToMany(User, {
    through: { model: Report, unique: false },
    foreignKey: "shelterId",
    constraints: false,
  });

  //M User <-- Request --> M Pet
  User.belongsToMany(Pet, {
    through: { model: Request, unique: false },
    foreignKey: "userId",
    constraints: false,
  });
  Pet.belongsToMany(User, {
    through: { model: Request, unique: false },
    foreignKey: "petId",
    constraints: false,
  });

  //M User <-- Pet --> M Shelter
  User.belongsToMany(Shelter, {
    through: { model: Pet, unique: false },
    foreignKey: "userId",
    constraints: false,
  });
  Shelter.belongsToMany(User, {
    through: { model: Pet, unique: false },
    foreignKey: "shelterId",
    constraints: false,
  });
};

module.exports = { initModels };
