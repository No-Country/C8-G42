const dotenv = require("dotenv");
const { app } = require("./app");
const socketIO = require('./../utils/socket')

dotenv.config({ path: "./config.env" });

const startServer = async () => {
  try {
    const PORT = 5000;

    const server = app.listen(PORT, () => {
      console.log(`Express app running! in port ${PORT}`);
    });

    socketIO(server);
  } catch (error) {
    console.log(error);
  }
};

startServer();
