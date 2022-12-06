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
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { post } from "../../redux/api";
import { setState, setMessage as stateMessage } from "../../redux/slices/uiSlice";

const RequestForm = ({ pet }) => {
  const user = useSelector((state) => state.user.user, shallowEqual);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState("");
  const textArea = useRef("");
  const dispatch = useDispatch();

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
        dispatch(setState("success"));
        dispatch(
          stateMessage(
            "Su solicitud ha sido recibida correctamente! Lo contactaremos a la brevedad <3"
          )
        );
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
