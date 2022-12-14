import {
  useDisclosure,
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  InputGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { HiArrowCircleUp } from "react-icons/hi";
import { useState, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { sendMessage, setNewMessage } from "../../../redux/slices/messangerSlice";

import MessageContainer from "./messages/MessageContainer";
import socket from "../../../utils/socket";
import { useEffect } from "react";

const placement = "right";

const Chat = ({ online, userId, shelterId, name }) => {
  const user = useSelector((state) => state.user.user, shallowEqual);
  const newMessage = useSelector((state) => state.messenger.newMessage)
  const [message, setMessage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textArea = useRef("null");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = {
      userId,
      shelterId,
      text: message,
      modifiedBy: user.role,
    };
    const rta = await dispatch(sendMessage(newMessage));
    socket.emit('message', newMessage);
    setMessage("");
  };

  onkeydown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  useEffect(() => {
    if (newMessage) {
      const chatId = `${shelterId}${userId}`
      if (chatId === newMessage) {
        onOpen()
      }
      dispatch(setNewMessage(false))
    }
  }, [newMessage])

  return (
    <>
      <Box display="flex" alignItems="center">
        <Avatar
          size="md"
          mr="2"
          name={name}
          src="https://bit.ly/broken-link"
          onClick={onOpen}
        >
        </Avatar>
        <p onClick={onOpen}> {name} </p>
      </Box>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px"> {name} </DrawerHeader>
          <DrawerBody
            display="flex"
            flexDir="column"
            justifyContent="space-between"
          >
            <Stack overflowY="auto" scrollSnapAlign="center">
              <MessageContainer userId={ userId } shelterId={ shelterId } />
            </Stack>
            <InputGroup display="flex" flexDir="column">
              <Textarea
                ref={textArea}
                variant="outline"
                position="relative"
                onChange={handleChange}
                value={message}
              />
              <Button
                colorScheme="teal"
                size="xs"
                onClick={handleSubmit}
                rightIcon={<HiArrowCircleUp />}
              >
                Send
              </Button>
            </InputGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Chat;
