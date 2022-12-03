import { useDisclosure, Button, Drawer } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShelter, fetchShelters } from "../../redux/slices/sheltersSlice";
import ChatsContainer from "./chats/ChatsContainer";
import socket from "../../utils/socket";

const placement = "right";

const Messenger = () => {
  const user = useSelector((state) => state.user.user);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.role ==="user") {

      dispatch(fetchShelters({ limit: 10, offset: 0 }));
      socket.auth = {
        userId: user.email,
        userRole: user.role,
      };
      socket.connect();
    }
    if (user?.role === "shelterOwner"){
      dispatch(fetchShelter({shelterId: user.shelter.id}))
    }
  }, [user]);

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
