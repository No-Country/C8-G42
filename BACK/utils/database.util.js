const { Sequelize } = require("sequelize");
const { dbConfig } = require("../src/config/config");
const { setupModels } = require("./../src/persistence/models/initModels");

console.log("dbConfig", dbConfig)

const USER = encodeURIComponent(dbConfig.username);
const PASSWORD = encodeURIComponent(dbConfig.password);
const URI = `${dbConfig.dialect}://${USER}:${PASSWORD}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;

const sequelize = new Sequelize(URI);

setupModels(sequelize);

const dbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

// module.exports = sequelize; //original
module.exports = dbConnection;
