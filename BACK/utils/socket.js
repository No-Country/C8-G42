const SocketIO = require('socket.io');
const { socketConfig } = require('./../src/config/config')

function socketIO(server) {
  const io = SocketIO(server, {
    cors: {
      origin: socketConfig.origin,
      methods: ["GET", "POST"]
    },
  });

  io.use(async (socket, next) => {
    const role = socket.handshake.auth.userRole;
    socket.id = socket.handshake.auth.userId;;
    socket.role = role

    role === "user" ? socket.join("users") : socket.join("shelters")

    next();
  });

  io.on('connection', (socket) => {
    socket.on('message', (message) => {
      let addressee
      message.modifiedBy === "user" ? addressee = message.shelterId : addressee = message.userId
      io.to(addressee).emit('message', message)
    })
  });

}

module.exports = socketIO;
