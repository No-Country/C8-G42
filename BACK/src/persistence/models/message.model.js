const { Model, DataTypes } = require('sequelize');
const { SHELTER_TABLE } = require("./shelter.model");
const { USER_TABLE } = require("./user.model");

const MESSAGE_TABLE = "messages";

const messageSchema = {
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
    unique: false,
  },
  shelterId: {
    type: DataTypes.INTEGER,
    field: "shelter_id",
    allowNull: false,
    references: {
      model: SHELTER_TABLE,
      key: "id",
    },
    unique: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modifiedBy: {
    type: DataTypes.STRING,
    field: "modified_by",
    allowNull: true,
  },
};

class Message extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: "user" });
    this.belongsTo(models.Shelter, { as: "shelter" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MESSAGE_TABLE,
      modelName: 'Message',
      timestamps: false
    }
  }
}

module.exports = { Message, MESSAGE_TABLE, messageSchema };
