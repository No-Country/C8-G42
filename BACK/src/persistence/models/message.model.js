const { db, DataTypes } = require("../../../utils/database.util");
const { SHELTER_TABLE } = require("./shelter.model");
const { USER_TABLE } = require("./user.model");

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

const Message = db.define(MESSAGE_TABLE, messageSchema);

module.exports = { Message, MESSAGE_TABLE, messageSchema };
