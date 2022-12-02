import { useUser } from "@auth0/nextjs-auth0";
import {
  useDisclosure,
  Button,
  Drawer,
} from "@chakra-ui/react";
import ChatsContainer from "./chats/ChatsContainer";

const placement = "right";

const Messenger = () => {
  const { user } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (user) {
    return (
      <>
        <Button
          colorScheme="blue"
          zIndex={9999999999}
          bottom={{ base: "14", md: "4" }}
          position="fixed"
          right="4"
          onClick={onOpen}
        >
          Messenger
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <ChatsContainer user={user} />
        </Drawer>
      </>
    );
  }
};

export default Messenger;
