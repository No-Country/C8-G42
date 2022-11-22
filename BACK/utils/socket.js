const SocketIO = require('socket.io');

function socketIO(server) {
  const io = SocketIO(server, {
    cors: {
      origin: 'http://localhost:5173',
      methods: ["GET", "POST"]
    },
  });

  io.use((socket, next) => {
    const userId = socket.handshake.auth.userId;
    const userEmail = socket.handshake.auth.userEmail;
    
    socket.userId = userId;
    socket.id = userEmail;

    next();
  });

  io.on('connection', (socket) => {
    console.log('New conection')
  });
}

module.exports = socketIO;
