import {
  Box,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Select,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  useEditableControls,
} from "@chakra-ui/react";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { putPet, destroyPet } from "../../redux/slices/petSlice";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const CardPet = ({ pets }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");

  const dispatch = useDispatch();
  const handleDelete = (num) => {
    dispatch(destroyPet({ id: num }));
  };

  const handleUpdate = (id, body) => {
    dispatch(putPet({ id, body }));
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleBreedChange = (e) => setBreed(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleWeight = (e) => setWeight(e.target.value);

  function EditableControls() {
    const { isEditing, getSubmitButtonProps, getCancelButtonProps } =
      useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton
          icon={<CloseIcon boxSize={3} />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : null;
  }

  return (
    <>
      {pets?.map((pet, i) => (
        <Card maxW="sm" h="480px" m="10px" key={i}>
          <CardBody>
            <Box p="5px" pos="relative" h="150px">
              <Image src={pet.image} fill alt="Foto de la mascota" />
            </Box>
            <Stack mt="6" spacing="3">
              <Flex justifyContent="center">
                <Editable
                  onSubmit={() => handleUpdate(pet.id, { name })}
                  defaultValue={pet.name}
                  isPreviewFocusable={true}
                  selectAllOnFocus={false}
                >
                  <Tooltip label="Click to edit">
                    <EditablePreview
                      py={2}
                      px={4}
                      _hover={{
                        background: useColorModeValue("gray.100", "gray.700"),
                      }}
                    />
                  </Tooltip>
                  <Input
                    value={name}
                    onChange={handleNameChange}
                    py={2}
                    px={4}
                    as={EditableInput}
                  />
                  <EditableControls />
                </Editable>
                <Editable
                  onSubmit={() => handleUpdate(pet.id, { breed })}
                  defaultValue={pet.breed}
                  isPreviewFocusable={true}
                  selectAllOnFocus={false}
                >
                  <Tooltip label="Click to edit">
                    <EditablePreview
                      py={2}
                      px={4}
                      _hover={{
                        background: useColorModeValue("gray.100", "gray.700"),
                      }}
                    />
                  </Tooltip>
                  <Input
                    value={breed}
                    onChange={handleBreedChange}
                    py={2}
                    px={4}
                    as={EditableInput}
                  />
                  <EditableControls />
                </Editable>
              </Flex>
              <Text>
                <Editable
                  onSubmit={() => handleUpdate(pet.id, { description })}
                  defaultValue={pet.description}
                  isPreviewFocusable={true}
                  selectAllOnFocus={false}
                >
                  <Tooltip label="Click to edit">
                    <EditablePreview
                      py={2}
                      px={4}
                      _hover={{
                        background: useColorModeValue("gray.100", "gray.700"),
                      }}
                    />
                  </Tooltip>
                  <Input
                    value={description}
                    onChange={handleDescription}
                    py={2}
                    px={4}
                    as={EditableInput}
                  />
                  <EditableControls />
                </Editable>
                <Text></Text>
                <Editable
                  onSubmit={() => handleUpdate(pet.id, { weight })}
                  defaultValue={pet.weight}
                  isPreviewFocusable={true}
                  selectAllOnFocus={false}
                >
                  <Tooltip label="Click to edit">
                    <EditablePreview
                      py={2}
                      px={4}
                      _hover={{
                        background: useColorModeValue("gray.100", "gray.700"),
                      }}
                    />
                  </Tooltip>
                  <Input
                    value={weight}
                    onChange={handleWeight}
                    py={2}
                    px={4}
                    as={EditableInput}
                  />
                  <EditableControls />
                </Editable>
                <FormControl>
                  <FormLabel>¿Esterilizado?</FormLabel>
                  <Select
                    onChange={(e) =>
                      handleUpdate(pet.id, { isSterilized: e.target.value })
                    }
                    placeholder={pet.isSterilized}
                  >
                    <option value={true}>Sí</option>
                    <option value={false}>No</option>
                  </Select>
                </FormControl>
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                onClick={() => handleDelete(pet.id)}
                bg="inherit"
                icon={<HiOutlineTrash size={20} />}
              />
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default CardPet;
