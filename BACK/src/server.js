const { serverConfig } = require('./config/config');
const { app } = require("./app");
const socketIO = require('./../utils/socket');

const startServer = async () => {
  try {
    
    console.log("Express Environment:", app.get('env'));

    const PORT = serverConfig.port;

    const server = app.listen(PORT, () => {
      console.log(`Express app running! in port ${PORT}`);
    });

    socketIO(server);
  } catch (error) {
    console.log(error);
  }
};

startServer();
