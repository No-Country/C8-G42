const { Model, DataTypes } = require("sequelize");
const { SHELTER_TABLE } = require("./shelter.model");
const { USER_TABLE } = require("./user.model");

const PET_TABLE = "pets";

const petSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  family: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  size: {
    type: DataTypes.ENUM,
    values: ["small", "medium", "large"],
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isSterilized: {
    type: DataTypes.BOOLEAN,
    field: "is_sterilized",
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  shelterId: {
    type: DataTypes.INTEGER,
    field: "shelter_id",
    allowNull: false,
    references: {
      model: SHELTER_TABLE,
      key: "id",
    },
  },
  status: {
    type: DataTypes.ENUM,
    values: ["adopted", "available", "inProgress"],
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
  adoptedDate: {
    type: DataTypes.DATE,
    field: "adopted_date",
    allowNull: true,
  },
  isVisible: {
    type: DataTypes.BOOLEAN,
    field: "is_visible",
    allowNull: false,
  },
  modifiedBy: {
    type: DataTypes.STRING,
    field: "modified_by",
    allowNull: true,
  },
};

class Pet extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: "user" });
    this.belongsTo(models.Shelter, { as: "shelter" });
    this.hasMany(models.Request, {
      as: "request",
      foreignKey: "petId",
    });
    this.hasMany(models.FavoritePet, {
      as: "favoritePet",
      foreignKey: "petId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PET_TABLE,
      modelName: "Pet",
      timestamps: false,
    };
  }
}

module.exports = { Pet, PET_TABLE, petSchema };
