import { io } from "socket.io-client";

const URL = "http://localhost:5000";
const socket = io(URL, { autoConnect: false });

socket.on("conect", ( {id, role} ) => {
  socket.auth.role = role
  socket.auth.id = id
})
 

export default socket;
