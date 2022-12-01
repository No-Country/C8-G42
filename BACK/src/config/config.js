const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, './../../.env')
});

// If there's no NODE_ENV within .env file (or not .env does not exist), set it to development
if (!process.env.NODE_ENV) { process.env.NODE_ENV = 'development'; }

require("dotenv").config({
  path: path.resolve(__dirname, './../../', `${process.env.NODE_ENV}.env`)
});


module.exports = {
  serverConfig: {
    host: process.env.NODE_HOST,
    port: process.env.NODE_PORT
  },
  socketConfig: {
    origin: process.env.SOCKET_ORIGIN,
  },
  dbConfig: {
    dialect: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB,
    logging: false,
  },
  whiteListCors: ['https://huellitas-auth.us.auth0.com', 'http://huellitas.ar', 'https://huellitas.ar', 'http://localhost:8080', 'http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
  emailConfig: {
    emailAccount: process.env.EMAIL_ACCOUNT,
    emailPass: process.env.EMAIL_PASS,
  }
};
