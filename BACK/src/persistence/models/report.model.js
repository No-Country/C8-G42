const { db, DataTypes } = require("../../../utils/database.util");
const { Shelter } = require("./shelter.model");
const { User } = require("./user.model");

const Report = db.define("report", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  shelterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Shelter,
      key: "id"
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id"
    }
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
    allowNull: true
  }
});

module.exports = { Report };
