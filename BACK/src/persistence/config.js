const { dbLocalConfig, dbConfig } = require('./../config/config');

const USER = encodeURIComponent(dbLocalConfig.username);
const PASSWORD = encodeURIComponent(dbLocalConfig.password);
const URI = `${dbLocalConfig.dialect}://${USER}:${PASSWORD}@${dbLocalConfig.host}:${dbLocalConfig.port}/${dbLocalConfig.database}`

module.exports = {
  development: dbConfig,
  production: {
    url: URI,
    dialect: dbLocalConfig.dialect,
  }
}
