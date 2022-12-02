import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const NewPet = ({ isOpen, onClose }) => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);
  const handleTextChange = (e) => setValue(e.target.value);
  const isError = input === "";
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mascota</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={isError}>
              <FormLabel>Nombre</FormLabel>
              <Input type="name" value={input} onChange={handleInputChange} />
              {!isError ? (
                <FormHelperText>
                  Ingresa el nombre
                </FormHelperText>
              ) : (
                <FormErrorMessage>Ingresa el nombre de la mascota :3</FormErrorMessage>
              )}
            </FormControl>
            <Select mt="5px" placeholder="Selecciona una categoría">
              <option>Perrx</option>
              <option>Gatx</option>
              <option>Otrx</option>
            </Select>
            <Text mt="5px" mb="8px">Descripción</Text>
            <Textarea
              value={value}
              onChange={handleTextChange}
              placeholder="Describe a la mascota, esto ayudará a los adoptantes a saber cómo es"
              size="sm"
            />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost">Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewPet;
