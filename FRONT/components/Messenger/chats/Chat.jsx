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
import { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchChats, sendMessage } from "../../../redux/slices/messangerSlice";

import MessageContainer from "./messages/MessageContainer";

const placement = "right";

const Chat = ({ name, online, shelter }) => {
  const user = useSelector((state) => state.user.user, shallowEqual);
  const chat = useSelector(
    (state) => state.messenger[shelter.id],
    shallowEqual
  );
  const [message, setMessage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.id) {
      if (chat === undefined) {
        dispatch(
          fetchChats({
            userId: user.id,
            shelterId: shelter.id,
            limit: 40,
            offset: 0,
          })
        );
      }
    }
  }, [shelter]);

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
      })
    );
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
              <MessageContainer
                chat={chat}
                user={user}
              />
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
