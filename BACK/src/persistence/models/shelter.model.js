const { Model, DataTypes } = require('sequelize');
const { USER_TABLE } = require("./user.model")

const SHELTER_TABLE = "shelters";

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

class Shelter extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: "owner" });
    this.hasMany(models.Pet, {
      as: "pet",
      foreignKey: "shelterId"
    });
    this.hasMany(models.Message, {
      as: "message",
      foreignKey: "shelterId"
    });
    this.hasMany(models.Report, {
      as: "report",
      foreignKey: "shelterId"
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SHELTER_TABLE,
      modelName: 'Shelter',
      timestamps: false
    }
  }
}

module.exports = { Shelter, SHELTER_TABLE, shelterSchema };