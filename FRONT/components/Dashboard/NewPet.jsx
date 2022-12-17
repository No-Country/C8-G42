import {
  Box,
  Button,
  Flex,
  FormControl,
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
  Textarea
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addNewPet } from "../../redux/slices/petSlice";
import { useToast } from '@chakra-ui/react'

const NewPet = ({ isOpen, onClose }) => {
  const toast= useToast()
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [family, setFamily] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [breed, setBreed] = useState("");
  const [isSterilized, setIsSterilized] = useState("");
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const handleNameChange = (e) => setName(e.target.value);
  const handleTextChange = (e) => setDescription(e.target.value);
  const handleFamily = (e) => setFamily(e.target.value);
  const handleSize = (e) => setSize(e.target.value);
  const handleWeigth = (e) => setWeight(e.target.value);
  const handleBreed = (e) => setBreed(e.target.value);
  const handleSterilized = (e) => setIsSterilized(e.target.value);

  const handleImageChange = (event) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      setImageSrc(event.target.result);
      setUploadData(undefined);
    };

    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "huellitas-images");

    const { secure_url } = await fetch(
      "https://api.cloudinary.com/v1_1/dxim5q0bd/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    if(description.length < 10) return toast({
      title: 'Error',
      description: "La descripción debe ser más larga",
      status: 'error',
      duration: 2000,
      isClosable: true,
    });

    dispatch(
      addNewPet({
        body: {
          name,
          description,
          family,
          size,
          breed,
          weight: parseInt(weight),
          isSterilized,
          isVisible: true,
          status: "available",
          image: secure_url,
        },
      })
      
    setName("");
    setDescription("");
    setFamily("");
    setSize("");
    setBreed("");
    setWeight("");
    setIsSterilized("");
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={{base:"250px", md:"800px"}}>
          <ModalHeader>Mascota</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <Flex gap="6">
                <Box>
                  <FormLabel>Imagen Mascota</FormLabel>
                  {imageSrc ? (
                    <img src={imageSrc} width="370px" />
                  ) : (
                    <Box w="370px" h="275px" bg="gray.200" mb="20px"></Box>
                  )}
                  <Input
                    type="file"
                    name="file"
                    onChange={handleImageChange}
                    sx={{
                      "::file-selector-button": {
                        border: "none",
                        outline: "none",
                        mr: 2,
                      },
                    }}
                  />
                  <FormLabel>Nombre</FormLabel>
                  <Input type="text" value={name} onChange={handleNameChange} />
                  <FormLabel>Peso</FormLabel>
                  <Input type="number" value={weight} onChange={handleWeigth} />
                </Box>
                <Box w="400px">
                  <FormLabel>Raza</FormLabel>
                  <Input type="text" value={breed} onChange={handleBreed} />
                  <FormLabel>Categoria</FormLabel>
                  <Select
                    onChange={handleFamily}
                    mt="5px"
                    placeholder="Selecciona una categoría"
                  >
                    <option value="dog">Perro/a</option>
                    <option value="cat">Gato/a</option>
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
                  <Text mt="5px" mb="8px">
                    Descripción
                  </Text>
                  <Textarea
                    value={description}
                    onChange={handleTextChange}
                    placeholder="Describe a la mascota, esto ayudará a los adoptantes a saber cómo es"
                    size="sm"
                  />
                </Box>
              </Flex>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="ghost" onClick={handleClick}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewPet;
