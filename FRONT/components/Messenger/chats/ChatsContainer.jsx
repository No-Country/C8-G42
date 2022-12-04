import { useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
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
import { useSelector } from "react-redux";

const ChatsContainer = () => {
  const user = useSelector((state) => state.user.user);

  const [searchValue, setSearchValue] = useState("");
  
  let chats;

  if (user.role === "user") {
    chats = useSelector((state) => state.shelters.shelters);
  }
  if (user.role === "shelterOwner") {
    chats = useSelector((state) => state.shelters.chats);
  }

  // const shelters = useSelector((state) => state.shelters.shelters);

  let searchedChats = [];

  if (searchValue.length === 0) {
    searchedChats = chats;
  } else {
    searchedChats = chats.filter((chat) => {
      const chatName = chat.name.toLowerCase();
      const searchName = searchValue.toLowerCase();
      return chatName.includes(searchName);
    });
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  
  return (
    <>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px"> {user.role === "user" ? "Shelters" : "Chats"} </DrawerHeader>
        <DrawerBody
          display="flex"
          flexDir="column"
          justifyContent="space-between"
        >
          <Stack direction="column">
            {searchedChats.map((chat) => (
              <Chat
                key={chat.id}
                userId={user.role === "user" ? user.id : chat.id}
                shelterId={user.role === "user" ? chat.id : user.shelter.id}
                name={
                  user.role === "user"
                    ? chat.name
                    : `${chat.firstName} ${chat.lastName}`
                }
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
};

export default ChatsContainer;
