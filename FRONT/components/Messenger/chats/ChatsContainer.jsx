import { useEffect, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import socket from "../../../utils/socket";
import {
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { fetchShelters } from "../../../redux/slices/sheltersSlice";

const ChatsContainer = ({ user }) => {
  const loading = useSelector((state) => state.ui.loading);
  const shelters = useSelector((state) => state.shelters.shelters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!(shelters.length > 0)) {
      dispatch(fetchShelters({ limit: 10, offset: 0 }));
    }
    if (user) {
      socket.auth = {
        userId: user.email,
      };
      socket.connect();
    }
  }, [shelters.length, dispatch, user]);

  const [searchValue, setSearchValue] = useState("");

  let searchedShelters = [];

  if (!searchValue.length > 0) {
    searchedShelters = shelters;
  } else {
    searchedShelters = shelters.filter((shelter) => {
      const shelterName = shelter.name.toLowerCase();
      const searchName = searchValue.toLowerCase();
      return shelterName.includes(searchName);
    });
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  if (shelters.length > 0 && !loading) {
    return (
      <>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Shelters</DrawerHeader>
          <DrawerBody
            display="flex"
            flexDir="column"
            justifyContent="space-between"
          >
            <Stack direction="column">
              {searchedShelters.map((shelter) => (
                <Chat
                  key={shelter.name}
                  name={shelter.name}
                  shelter={shelter}
                  online={false}
                // shelterId={shelter}
                />
              ))}
            </Stack>
            <InputGroup>
              <Input
                position="relative"
                placeholder="Search shelter"
                onChange={handleChange}
              />
              <InputRightElement
                pointerEvents="none"
              // children={<Search2Icon />}
              >
                <Search2Icon />
              </InputRightElement>
            </InputGroup>
          </DrawerBody>
        </DrawerContent>
      </>
    );
  } else {
    <>Loading...</>;
  }
};

export default ChatsContainer;
