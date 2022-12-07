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
    socket.id = socket.handshake.auth.userId;;
    socket.role = socket.handshake.auth.userRole;
    next();
  });

  io.on('connection', (socket) => {
    console.log('New conection')
    const id = socket.id
    const role = socket.role
    const socketRoom = socket.rooms
    console.log({id, role, socketRoom})
    io.to(id).emit('conect', {id, role});


    socket.on('message', (message) => {
      let addressee
      message.modifiedBy === "user" ? addressee = message.shelterId : addressee = message.userId
      io.to(addressee).emit('message', message)
      console.log(message)
    })
  });

}

module.exports = socketIO;
