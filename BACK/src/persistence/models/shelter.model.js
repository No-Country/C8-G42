const { db, DataTypes } = require("../../../utils/database.util");
const { USER_TABLE } = require("./user.model")

const SHELTER_TABLE = "shelter";

const shelterSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ownerId: {
    field: "owner_id",
    references: {
      model: USER_TABLE,
      key: "id"
    },
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  modifiedBy: {
    type: DataTypes.STRING,
    allowNull: true,
    field: "modified_by"
  }
}

const Shelter = db.define(SHELTER_TABLE, shelterSchema);

module.exports = { Shelter, SHELTER_TABLE, shelterSchema };