const { Sequelize, DataTypes } = require("sequelize");

const { dbConfig } = require("../src/config/config");

// Establish db connection
const db = new Sequelize(dbConfig);

module.exports = { db, DataTypes };
