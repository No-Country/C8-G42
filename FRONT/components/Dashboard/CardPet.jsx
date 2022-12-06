import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { TbPencil } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";
const CardPet = () => {
  return (
    <Card maxW="sm" h="400px" m="10px">
      <CardBody>
        {/*   <Image
      src=''
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    /> */}
        <Stack mt="6" spacing="3">
          <Heading size="md">Juanito</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            laboriosam saepe quo quaerat veritatis quas, ad soluta quod
            consequatur exercitationem ea modi perspiciatis eos animi accusamus
            iure unde fugiat dolore!
            <Checkbox size="md" colorScheme="green" mr="5px">
              Adoptado
            </Checkbox>
            <Checkbox size="md" colorScheme="green">
              Vacunado
            </Checkbox>
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="ghost" colorScheme="green">
            Guardar
          </Button>
          <IconButton bg="inherit" icon={<TbPencil size={20} />} />
          <IconButton bg="inherit" icon={<HiOutlineTrash size={20} />} />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CardPet;