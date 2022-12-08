const { Model, DataTypes } = require('sequelize');

const USER_TABLE = "users"
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
    allowNull: true,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
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

class User extends Model {
  static associate(models) {
    this.belongsToMany(models.Pet, {
      as: 'requests',
      through: models.Request,
      foreignKey: 'userId',
      otherKey: 'petId'
    })
    this.hasOne(models.Shelter, {
      as: "shelter",
      foreignKey: "ownerId"
    });
    this.hasMany(models.Pet, {
      as: "pet",
      foreignKey: "userId"
    });
    this.hasMany(models.Message, {
      as: "message",
      foreignKey: "userId"
    });
    this.hasMany(models.Request, {
      as: "request",
      foreignKey: "userId"
    });
    this.hasMany(models.Report, {
      as: "report",
      foreignKey: "userId"
    });
    this.hasMany(models.FavoritePet, {
      as: "favoritePet",
      foreignKey: "userId"
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}
  
module.exports = { User, USER_TABLE, userSchema };
  