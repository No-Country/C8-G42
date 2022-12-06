import {
  Button,
  InputGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { post } from "../../redux/api";

const RequestForm = ({ pet }) => {
  const user = useSelector((state) => state.user.user, shallowEqual);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState("");
  const textArea = useRef("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      userId: user.id,
      petId: pet.id,
      message,
    };

    post("/requests", newRequest).then((res) => {
      if (res?.status === 201) {
        console.log({ newRequest });
      }
    });

    setMessage("");
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Adoptar</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Déjanos un mensaje</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup display="flex" flexDir="column">
              <Textarea
                ref={textArea}
                variant="flushed"
                position="relative"
                onChange={handleChange}
                value={message}
              />
            </InputGroup>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} colorScheme="blue" mr={3}>
              Enviar
            </Button>
            <Button onClick={onClose} variant="ghost">
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RequestForm;
