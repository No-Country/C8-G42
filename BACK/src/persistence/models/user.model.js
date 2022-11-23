const { db, DataTypes } = require("../../../utils/database.util");

const USER_TABLE = "user"
const userSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    field: "first_name",
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    field: "last_name",
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM,
    values: ["user", "admin", "shelterOwner"],
    defaultValue: "user",
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    allowNull: false,
    values: ["active", "disable"],
    defaultValue: "active",
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modifiedBy: {
    type: DataTypes.STRING,
    field: "modified_by",
    allowNull: true
  },
  isDark: {
    type: DataTypes.BOOLEAN,
    field: "is_dark",
    defaultValue: false,
    allowNull: false
  }
}

const User = db.define(USER_TABLE, userSchema);
  
  module.exports = { User, USER_TABLE, userSchema };
  