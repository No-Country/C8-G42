const { db, DataTypes } = require("../../../utils/database.util");
const { Shelter } = require("./shelter.model");
const { User } = require("./user.model");

const PET_TABLE = "pet";

const petSchema = {
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
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  size: {
    type: DataTypes.ENUM,
    values: ["small", "medium", "large"],
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isSterilized: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  shelterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Shelter,
      key: "id",
    },
  },
  status: {
    type: DataTypes.ENUM,
    values: ["adopted", "available", "inProgress"],
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
  adoptedDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  isVisible: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  modifiedBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
};

const Pet = db.define(PET_TABLE, petSchema);

module.exports = { Pet, PET_TABLE, petSchema };
