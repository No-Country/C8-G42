const { dbLocalConfig } = require('./../config/config');

const USER = encodeURIComponent(dbLocalConfig.username);
const PASSWORD = encodeURIComponent(dbLocalConfig.password);
const URI = `${dbLocalConfig.dialect}://${USER}:${PASSWORD}@${dbLocalConfig.host}:${dbLocalConfig.port}/${dbLocalConfig.database}`

module.exports = {
  development: {
    url: URI,
    dialect: dbLocalConfig.dialect,
  },
  production: {
    url: URI,
    dialect: dbLocalConfig.dialect,
  }
}
