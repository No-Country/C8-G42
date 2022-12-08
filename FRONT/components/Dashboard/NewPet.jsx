import {
  Box,
  Button,
  Flex,
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
  Skeleton,
  Text,
  Textarea,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPet } from "../../redux/slices/petSlice";



const NewPet = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [family, setFamily] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [breed, setBreed] = useState("");
  const [isSterilized, setIsSterilized] = useState("");
  const [isVisible, setIsVisible] = useState("");
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
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
  const handleVisible = (e) => setIsVisible(e.target.value);
  const handleStatus = (e) => setStatus(e.target.value);

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
    };
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('file', image);
    formData.append('upload_preset', 'huellitas-images');

    const { secure_url } = await fetch('https://api.cloudinary.com/v1_1/dxim5q0bd/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

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
          isVisible,
          status: "available",
          image: secure_url
        },
      })
    ).then((res) => (console.log("entró al then, res: ", res)));
    setName("");
    setDescription("");
    setFamily("");
    setSize("");
    setBreed("");
    setWeight("");
    setIsSterilized("");
    setIsVisible("");
    setStatus("");
    onClose()
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent maxW="800px">
          <ModalHeader>Mascota</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired >
              <Flex gap="6">
                <Box>
                  <FormLabel>Imagen Mascota</FormLabel>
                  {imageSrc ?
                    <img src={imageSrc} width="370px" />
                    :
                    <Box w='370px' h='275px' bg='gray.200' mb="20px" ></Box>
                  }
                  <Input type="file" name="file" onChange={handleImageChange}
                    sx={{
                      "::file-selector-button": {
                        border: "none",
                        outline: "none",
                        mr: 2,
                        ...styles,
                      },
                    }}
                  />
                  <FormLabel>Nombre</FormLabel>
                  <Input type="text" value={name} onChange={handleNameChange} />
                  <FormLabel>Peso</FormLabel>
                  <Input type="number" value={weight} onChange={handleWeigth} />
                </Box>
                <Box w='400px'>
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
                  <FormLabel>¿Visible?</FormLabel>
                  <Select
                    onChange={handleVisible}
                    mt="5px"
                    placeholder="Selecciona la visibilidad"
                  >
                    <option value={true}>Sí</option>
                    <option value={false}>No</option>
                  </Select>
                  {/* <FormLabel>Estado</FormLabel>
                <Select
                  onChange={handleStatus}
                  mt="5px"
                  placeholder="Selecciona un estado"
                >
                  <option value="adopted">Adoptado</option>
                  <option value="available">Disponible</option>
                  <option value="inProgress">En proceso</option>
                </Select> */}
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
