const { db, DataTypes } = require("../../../utils/database.util");
const { Pet } = require("./pet.model");
const { User } = require("./user.model");

const REQUEST_TABLE = "request";

const requestSchema =  {
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
    allowNull: true,
  },
};

const Request = db.define(REQUEST_TABLE, requestSchema);

module.exports = { Request, REQUEST_TABLE, requestSchema };
