const { db, DataTypes } = require("../../../utils/database.util");
const { Shelter } = require("./shelter.model");
const { User } = require("./user.model");

const Message = db.define("message", {
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
});

module.exports = { Message };
