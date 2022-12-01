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
import { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { sendMessage } from "../../../redux/slices/messangerSlice";

import MessageContainer from "./messages/MessageContainer";

const placement = "right";

const Chat = ({ name, online, shelter }) => {
  const user = useSelector((state) => state.user.user, shallowEqual);
  const [message, setMessage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(
      sendMessage({
        userId: user.id,
        shelterId: shelter.id,
        text: message,
        modifiedBy: user.role,
        onOpen
      })
    )
  };
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
          <AvatarBadge
            onClick={onOpen}
            boxSize="1.05em"
            bg={online ? "green.500" : "tomato"}
          />
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
            <Stack>
              <MessageContainer shelter={shelter} />
            </Stack>
            <InputGroup>
              <Textarea
                variant="outline"
                position="relative"
                // placeholder="Search"
                onChange={handleChange}
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
