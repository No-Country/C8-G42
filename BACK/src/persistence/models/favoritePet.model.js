const { Model, DataTypes } = require('sequelize');
const { PET_TABLE } = require("./pet.model");
const { USER_TABLE } = require("./user.model");

const FAVORITE_PET_TABLE = "favoritePets";

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

class FavoritePet extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: "user" });
    this.belongsTo(models.Pet, { as: "pet" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: FAVORITE_PET_TABLE,
      modelName: 'FavoritePet',
      timestamps: false
    }
  }
}

module.exports = { FavoritePet, FAVORITE_PET_TABLE, favoritePetSchema };
