const SocketIO = require('socket.io');
const { socketConfig } = require('./../src/config/config')
const userController = require('../src/controllers/users.controller')

function socketIO(server) {
  const io = SocketIO(server, {
    cors: {
      origin: socketConfig.origin,
      methods: ["GET", "POST"]
    },
  });

  io.use(async (socket, next) => {
    const userEmail = socket.handshake.auth.userId;
    const user = await userController.getByEmail(userEmail);
    socket.id = user.dataValues.id;
    socket.role = user.dataValues.role
    next();
  });

  io.on('connection', (socket) => {
    console.log('New conection')
    const id = socket.id
    const role = socket.role
    console.log({id, role})
    io.to(id).emit('conect', {id, role});
  });
}

module.exports = socketIO;
