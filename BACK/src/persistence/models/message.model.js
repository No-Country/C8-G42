const { db, DataTypes } = require("../../../utils/database.util");
const { Shelter } = require("./shelter.model");
const { User } = require("./user.model");

const MESSAGE_TABLE = "message";

const messageSchema = {
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
    unique: false,
  },
  shelterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Shelter,
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
    allowNull: true,
  },
};

const Message = db.define(MESSAGE_TABLE, messageSchema);

module.exports = { Message, MESSAGE_TABLE, messageSchema };
