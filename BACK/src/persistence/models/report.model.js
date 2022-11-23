const { db, DataTypes } = require("../../../utils/database.util");
const { SHELTER_TABLE } = require("./shelter.model");
const { USER_TABLE } = require("./user.model");

const REPORT_TABLE = "report";
const reportSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  shelterId: {
    type: DataTypes.INTEGER,
    field: "shelter_id",
    allowNull: false,
    references: {
      model: SHELTER_TABLE,
      key: "id"
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    field: "user_id",
    allowNull: false,
    references: {
      model: USER_TABLE,
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
    field: "modified_by",
    allowNull: true
  }
};

const Report = db.define(REPORT_TABLE, reportSchema);

module.exports = { Report, REPORT_TABLE, reportSchema };
