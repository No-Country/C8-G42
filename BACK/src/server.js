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
    /* Para DROP  */
    // await db.drop();
    // db
    //   .sync({force: true}) // create the database table for our model(s)
    //   .then(function () {
    //     // do some work
    //   })
    //   .then(function () {
    //     console.log("llegó");
    //     return db.drop({force: true}); // drop all tables in the db
    //   });

    // Set server to listen
    const PORT = 3000;

    app.listen(PORT, () => {
      console.log(`Express app running! in port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
