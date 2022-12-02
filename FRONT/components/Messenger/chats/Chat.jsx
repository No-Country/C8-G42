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
import { useState, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchChats, sendMessage } from "../../../redux/slices/messangerSlice";

import MessageContainer from "./messages/MessageContainer";

const placement = "right";

const Chat = ({ online, shelter }) => {
  const user = useSelector((state) => state.user.user, shallowEqual);
  const [message, setMessage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textArea = useRef("null")
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      sendMessage({
        userId: user.id,
        shelterId: shelter.id,
        text: message,
        modifiedBy: user.role,
      })
    );
    setMessage("");
  };

  onkeydown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event)
    }
  };
  return (
    <>
      <Box display="flex" alignItems="center">
        <Avatar
          size="md"
          mr="2"
          name={shelter.name}
          src="https://bit.ly/broken-link"
          onClick={onOpen}
        >
          <AvatarBadge
            onClick={onOpen}
            boxSize="1.05em"
            bg={online ? "green.500" : "tomato"}
          />
        </Avatar>
        <p onClick={onOpen}> {shelter.name} </p>
      </Box>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px"> {shelter.name} </DrawerHeader>
          <DrawerBody
            display="flex"
            flexDir="column"
            justifyContent="space-between"
          >
            <Stack overflowY="auto" scrollSnapAlign="center" >
              <MessageContainer
                shelter={shelter}
              />
            </Stack>
            <InputGroup>
              <Textarea
                ref={textArea}
                variant="outline"
                position="relative"
                onChange={handleChange}
                value={message}
              />
              <Button colorScheme="teal" size="xs" onClick={handleSubmit}>
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
