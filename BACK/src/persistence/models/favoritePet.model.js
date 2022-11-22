const { db, DataTypes } = require("../../../utils/database.util");
const { Pet } = require("./pet.model");
const { User } = require("./user.model");

const FAVORITE_PET_TABLE = "favoritePet";

const favoritePetSchema = {
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
};

const FavoritePet = db.define(FAVORITE_PET_TABLE, favoritePetSchema);

module.exports = { FavoritePet, FAVORITE_PET_TABLE, favoritePetSchema };
