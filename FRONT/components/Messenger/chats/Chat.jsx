import {
  useDisclosure,
  Avatar,
  AvatarBadge,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  InputGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageContainer from "./messages/MessageContainer";
import socket from "../../../utils/socket";
import { fetchChats } from "../../../redux/slices/messangerSlice";

const placement = "right";

const Chat = ({ name, online, shelter }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const loading = useSelector((state) => state.ui.loading);
  
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  if (true) {
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
              </InputGroup>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  } else {
    return <>Acá se van a mostrar los mensajes</>;
  }
};

export default Chat;
