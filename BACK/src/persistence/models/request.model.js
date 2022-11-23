const { Model, DataTypes } = require('sequelize');
const { PET_TABLE } = require("./pet.model");
const { USER_TABLE } = require("./user.model");

const REQUEST_TABLE = "requests";

const requestSchema =  {
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
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: ["pending", "resolved"],
    defaultValue: "pending",
    allowNull: false,
  },
  modifiedBy: {
    type: DataTypes.STRING,
    field: "modified_by",
    allowNull: true,
  },
};

class Request extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: "user" });
    this.belongsTo(models.Pet, { as: "pet" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REQUEST_TABLE,
      modelName: 'Request',
      timestamps: false
    }
  }
}

module.exports = { Request, REQUEST_TABLE, requestSchema };
