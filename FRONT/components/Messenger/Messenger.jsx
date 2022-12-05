import {
  useDisclosure,
  Button,
  Drawer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShelter, fetchShelters } from "../../redux/slices/sheltersSlice";
import ChatsContainer from "./chats/ChatsContainer";
import socket from "../../utils/socket";
import { addMessage, fetchChat, setNewMessage } from "../../redux/slices/messangerSlice";

const placement = "right";

const Messenger = () => {
  const user = useSelector((state) => state.user.user);
  const chat = useSelector((state) => state.messenger.chats);

  console.log({chat})
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.role === "user") {
      dispatch(fetchShelters({ limit: 10, offset: 0 }));
    }
    if (user?.role === "shelterOwner") {
      dispatch(fetchShelter({ shelterId: user.shelter.id }));
    }
    if (user?.role) {
      socket.auth = {
        userId: user.id,
        userRole: user.role,
      };
      socket.connect();
    }
  }, [user]);

  socket.on("message", (message) => {
    const chatId = `${message.shelterId}${message.userId}`;
    console.log("new message: ", {message})
    if (chat[chatId]) {
      dispatch(addMessage(message));
    } else {
      dispatch(
        fetchChat({
          userId: message.userId,
          shelterId: message.shelterId,
          limit: 40,
          offset: 0,
        })
      );
    }
    dispatch(setNewMessage({userId: message.userId, shelterId: message.shelterId}))
    
    onOpen()

    // if (user.role === "shelterOwner") {
    //   const chats = useSelector((state) => state.shelters.chats)
      
    //   const cha
    // }
  });

  if (user) {
    return (
      <>
        <Button
          colorScheme="blue"
          bottom={{ base: "14", md: "4" }}
          position="fixed"
          right="4"
          onClick={onOpen}
        >
          Messenger
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <ChatsContainer />
        </Drawer>
      </>
    );
  }
};

export default Messenger;
