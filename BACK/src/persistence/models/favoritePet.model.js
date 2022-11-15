const { db, DataTypes } = require("../../../utils/database.util");

const FavoritePet = db.define("favoritePet", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  petId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isFavorite: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = { FavoritePet };