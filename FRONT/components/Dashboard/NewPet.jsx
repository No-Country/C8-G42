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
import { useDispatch, useSelector } from "react-redux";
import { addNewPet } from "../../redux/slices/petSlice";


const NewPet = ({ isOpen, onClose }) => {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [family, setFamily] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [breed, setBreed] = useState("");
  const [isSterilized, setIsSterilized] = useState("");
  const [isVisible, setIsVisible] = useState("");
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false)

  const handleNameChange = (e) => setName(e.target.value);
  const handleTextChange = (e) => setDescription(e.target.value);
  const handleFamily = (e) => setFamily(e.target.value);
  const handleSize = (e) => setSize(e.target.value);
  const handleWeigth = (e) => setWeight(parseInt(e.target.value));
  const handleBreed = (e) => setBreed(e.target.value);
  const handleSterilized = (e) => setIsSterilized(e.target.value);
  const handleVisible = (e) => setIsVisible(e.target.value);
  const handleStatus = (e) => setStatus(e.target.value);

  const Error=()=>{
    if(name === "" ) return setIsError(true);

  } 

  const handleClick = () => {
    dispatch(
      addNewPet({
        body: {
          userId: user.id,
          name,
          description,
          family,
          size,
          breed,
          weight,
          isSterilized,
          isVisible,
          status,
        },
      })
    );
    setName("");
    setDescription("");
    setFamily("");
    setSize("");
    setBreed("");
    setWeight("");
    setIsSterilized("");
    setIsVisible("");
    setStatus("");
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mascota</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={Error}>
              <FormLabel>Nombre</FormLabel>
              <Input type="name" value={name} onChange={handleNameChange} />
              {!isError ? (
                <FormHelperText>Ingresa el nombre</FormHelperText>
              ) : (
                <FormErrorMessage>
                  Ingresa el nombre de la mascota :3
                </FormErrorMessage>
              )}
              <FormLabel>Peso</FormLabel>
              <Input type="name" value={weight} onChange={handleWeigth} />
              {!isError ? (
                <FormHelperText>Ingresa el peso</FormHelperText>
              ) : (
                <FormErrorMessage>
                  Ingresa el peso de la mascota :3
                </FormErrorMessage>
              )}
              <FormLabel>Raza</FormLabel>
              <Input type="name" value={breed} onChange={handleBreed} />
              {!isError ? (
                <FormHelperText>
                  Ingresa el modelo de tu mascota :D
                </FormHelperText>
              ) : (
                <FormErrorMessage>Ingresa la raza</FormErrorMessage>
              )}
              <FormLabel>Categoria</FormLabel>
              <Select
                onChange={handleFamily}
                mt="5px"
                placeholder="Selecciona una categoría"
              >
                <option value="Perro">Perro/a</option>
                <option value="Gato">Gato/a</option>
              </Select>
              <FormLabel>Tamaño</FormLabel>
              <Select
                onChange={handleSize}
                mt="5px"
                placeholder="Selecciona una categoría"
              >
                <option value="small">Pequeño</option>
                <option value="medium">Mediano</option>
                <option value="large">Grande</option>
              </Select>
              <FormLabel>¿Esterilizado?</FormLabel>
              <Select
                onChange={handleSterilized}
                mt="5px"
                placeholder="Selecciona una categoría"
              >
                <option value={true}>Sí</option>
                <option value={false}>No</option>
              </Select>
              <FormLabel>¿Visible?</FormLabel>
              <Select
                onChange={handleVisible}
                mt="5px"
                placeholder="Selecciona la visibilidad"
              >
                <option value={true}>Sí</option>
                <option value={false}>No</option>
              </Select>
              <FormLabel>Estado</FormLabel>
              <Select
                onChange={handleStatus}
                mt="5px"
                placeholder="Selecciona un estado"
              >
                <option value="adopted">Adoptado</option>
                <option value="available">Disponible</option>
                <option value="inProgress">En proceso</option>
              </Select>
            </FormControl>
            <Text mt="5px" mb="8px">
              Descripción
            </Text>
            <Textarea
              value={description}
              onChange={handleTextChange}
              placeholder="Describe a la mascota, esto ayudará a los adoptantes a saber cómo es"
              size="sm"
            />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={handleClick}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewPet;
