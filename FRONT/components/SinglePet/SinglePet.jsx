import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import AdoptIcon from "../../Icons/AdoptIcon";
import PawIcon from "../../Icons/Paw";
import pet from './rocket.png'

const SinglePet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Mascota</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Fundacion xs" src="" />
              <Box>
                <Heading size="sm">Fundacion x's</Heading>
                <Text>Juanito, 2 anios</Text>
              </Box>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Image src={pet} alt="Mascota" width={400} height={200}/>
            </Flex>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius accusantium repudiandae possimus voluptatem dignissimos, ipsam, repellat quam distinctio quos ipsum fugit, laudantium iste reprehenderit magni omnis sed porro tempora?
              Quidem quae cum sint expedita voluptas. Quae possimus porro optio velit voluptate in nobis dolore facilis dolor perferendis illo quaerat similique, ipsam ipsa explicabo expedita consectetur tempora dicta beatae voluptatibus.
            </Text>
          </ModalBody>
          <ModalFooter>
            <PawIcon />
            <AdoptIcon />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SinglePet;
