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
import { useDispatch } from "react-redux";
import { addNewPet} from "../../redux/slices/petSlice";


const NewPet = ({ isOpen, onClose }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [family, setFamily] = useState("")

  const handleNameChange = (e) => setName(e.target.value);
  const handleTextChange = (e) => setDescription(e.target.value);
  const handleFamily=(e)=> setFamily(e.target.value)

  const isError = name === "";
console.log(Select.value)
  const handleClick =()=>{
  dispatch(addNewPet({
  body:{ name,
    description}
  }))
  setName("")
  setDescription("")
  }
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
              <Input type="name" value={name} onChange={handleNameChange} />
              {!isError ? (
                <FormHelperText>
                 Ingresa el nombre
                </FormHelperText>
              ) : (
                <FormErrorMessage>Ingresa el nombre de la mascota :3</FormErrorMessage>
              )}
            <FormLabel>Categoria</FormLabel>
            <Select onChange={handleFamily} mt="5px" placeholder="Selecciona una categoría">
              <option value="Perro">Perro/a</option>
              <option value="Gato">Gato/a</option>
            </Select>
            </FormControl>
            <Text mt="5px" mb="8px">Descripción</Text>
            <Textarea
              value={description}
              onChange={handleTextChange}
              placeholder="Describe a la mascota, esto ayudará a los adoptantes a saber cómo es"
              size="sm"
            />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={handleClick}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewPet;
