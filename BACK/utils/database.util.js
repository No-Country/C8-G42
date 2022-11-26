const { Sequelize } = require("sequelize");
const { dbConfig } = require("../src/config/config");
const { setupModels } = require("./../src/persistence/models/initModels");

const USER = encodeURIComponent(dbConfig.username);
const PASSWORD = encodeURIComponent(dbConfig.password);
const URI = `${dbConfig.dialect}://${USER}:${PASSWORD}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;

const sequelize = new Sequelize(URI);

setupModels(sequelize);

module.exports = sequelize;
