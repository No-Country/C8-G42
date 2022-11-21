const dotenv = require("dotenv");

const { app } = require("./app");

const { initModels } = require("./persistence/models/initModels");

// Utils
const { db } = require("../utils/database.util");

dotenv.config({ path: "./config.env" });

const startServer = async () => {
  try {
    await db.authenticate();

    // Establish the relations between models
    initModels();

    await db.sync();

    // Set server to listen
    const PORT = 5000;

    app.listen(PORT, () => {
      console.log(`Express app running! in port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
