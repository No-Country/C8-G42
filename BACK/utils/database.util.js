const { Sequelize } = require("sequelize");
const { dbLocalConfig, dbConfig } = require("../src/config/config");
const { setupModels } = require("./../src/persistence/models/initModels");

const USER = encodeURIComponent(dbLocalConfig.username);
const PASSWORD = encodeURIComponent(dbLocalConfig.password);
//const URI = `${dbLocalConfig.dialect}://${USER}:${PASSWORD}@${dbLocalConfig.host}:${dbLocalConfig.port}/${dbLocalConfig.database}`;
const sequelize = new Sequelize(dbConfig);

setupModels(sequelize);

module.exports = sequelize;
