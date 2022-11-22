const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, "..", "..", "config.env"),
});

module.exports = {
  dbConfig: {
    dialect: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB,
    logging: false,
  },
  whiteListCors: ['http://localhost:8080', 'http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
  dbLocalConfig: {
    dialect: "postgres",
    host: "localhost",
    username: "ale",
    password: "admin123",
    port: 5432,
    database: "huellitas",
    logging: true,
  },
  emailConfig: {
    emailAccount: process.env.EMAIL_ACCOUNT,
    emailPass: process.env.EMAIL_PASS,
  }
};
