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

const ChatsContainer = () => {
  const user = useSelector((state) => state.user.user);
  const shelters = useSelector((state) => state.shelters.shelters);
  
  console.log({shelters})
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
  if (user.role === "user") {
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
                  key={shelter.id}
                  shelter={shelter}
                  online={false}
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
                children={<Search2Icon />}
              />
            </InputGroup>
          </DrawerBody>
        </DrawerContent>
      </>
    );
  } else {
    <>Loading...</>
  }
};

export default ChatsContainer;
