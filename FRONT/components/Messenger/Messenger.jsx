import { useState } from "react";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Stack,
  Input,
} from "@chakra-ui/react";
import Chat from "./Chat";

const defaultShelters = [
  {
    name: "Happy Heart",
    online: true
  },
  {
    name: "Happy Heart 2",
    online: true
  },
  {
    name: "Corazones Solidarios",
    online: false
  },
  {
    name: "Huellitas :)",
    online: true
  },
];
const placement = "right";

const Messenger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ shelters, setShelters ] = useState(defaultShelters);
  const [ searchValue, setSearchValue ] = useState("");

  let searchedShelters = [];

  if (!searchValue.length > 0) {
    searchedShelters = shelters;
  } else {
    searchedShelters = shelters.filter(shelter => {
      const shelterName = shelter.name.toLowerCase();
      const searchName = searchValue.toLowerCase();
      return shelterName.includes(searchName);
    });
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <>
      <Button
        colorScheme="blue"
        position="fixed"
        bottom="4"
        right="4"
        onClick={onOpen}
      >
        Messenger
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Shelters</DrawerHeader>
          <DrawerBody display="flex" flexDir="column" justifyContent="space-between">
            <Stack direction="column">
              {searchedShelters.map((shelter) => (
                <Chat key={shelter.name} name={shelter.name} online={shelter.online} />
              ))}
            </Stack>
            <Input
              position="relative"
              placeholder="Search shelter"
              onChange={handleChange}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Messenger;
