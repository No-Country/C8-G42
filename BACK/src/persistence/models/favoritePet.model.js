const { db, DataTypes } = require("../../../utils/database.util");
const { Pet } = require("./pet.model");
const { User } = require("./user.model");

const FavoritePet = db.define("favoritePet", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  petId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Pet,
      key: "id",
    },
  },
  isFavorite: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = { FavoritePet };
