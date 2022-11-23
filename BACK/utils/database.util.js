const { Sequelize, DataTypes } = require("sequelize");

const { dbLocalConfig } = require("../src/config/config");

// Establish db connection
const db = new Sequelize(dbLocalConfig);

module.exports = { db, DataTypes };
