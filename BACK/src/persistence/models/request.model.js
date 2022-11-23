const { db, DataTypes } = require("../../../utils/database.util");
const { PET_TABLE } = require("./pet.model");
const { USER_TABLE } = require("./user.model");

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

const Request = db.define(REQUEST_TABLE, requestSchema);

module.exports = { Request, REQUEST_TABLE, requestSchema };
