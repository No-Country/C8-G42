const { dbConfig } = require('./../config/config');

const USER = encodeURIComponent(dbConfig.username);
const PASSWORD = encodeURIComponent(dbConfig.password);
const URI = `${dbConfig.dialect}://${USER}:${PASSWORD}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`

module.exports = {
  development: {
    url: URI,
    dialect: dbConfig.dialect
  },
  production: {
    url: URI,
    dialect: dbConfig.dialect,
  }
}
