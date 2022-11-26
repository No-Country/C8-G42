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
  Input,
} from "@chakra-ui/react";

const defaultMessage = {
  id: 4,
  userId: 15,
  shelterId: 1,
  text: "Hola",
  modifiedBy: "user",
};

const Message = () => {
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
            <Box>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Box>
            <Input
              position="relative"
              //   placeholder=""
              onChange={handleChange}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Message;
