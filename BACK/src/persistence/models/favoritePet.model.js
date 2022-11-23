const { db, DataTypes } = require("../../../utils/database.util");
const { PET_TABLE } = require("./pet.model");
const { USER_TABLE } = require("./user.model");

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
    field: "user_id",
    allowNull: false,
    references: {
      model: USER_TABLE,
      key: "id",
    },
  },
  petId: {
    type: DataTypes.INTEGER,
    field: "pet_id",
    allowNull: false,
    references: {
      model: PET_TABLE,
      key: "id",
    },
  },
  isFavorite: {
    type: DataTypes.BOOLEAN,
    field: "is_favorite",
    allowNull: false,
  },
};

const FavoritePet = db.define(FAVORITE_PET_TABLE, favoritePetSchema);

module.exports = { FavoritePet, FAVORITE_PET_TABLE, favoritePetSchema };
