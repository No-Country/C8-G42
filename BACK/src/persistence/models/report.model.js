const { db, DataTypes } = require("../../../utils/database.util");

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
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
});

module.exports = { Report };
