import { io } from "socket.io-client";
import { addMessage } from "../redux/slices/messangerSlice";

const URL = "http://localhost:5000";
const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

socket.on("conect", ( {id, role} ) => {
  console.log({id, role});
  socket.auth.role = role
  socket.auth.id = id
})
 

export default socket;
