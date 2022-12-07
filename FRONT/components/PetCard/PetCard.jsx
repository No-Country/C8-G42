import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  ButtonGroup,
  Heading,
  Button,
  Text,
  Box,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import RequestForm from "../Forms/RequestForm";
import SinglePet from "../SinglePet/SinglePet";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import FavoriteIcon from "../../Icons/FavoriteIcon";
import { post } from "../../redux/api";
import { setState, setMessage as stateMessage } from "../../redux/slices/uiSlice";

const PetCard = ({ pet }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((state) => state.user.user, shallowEqual);

  const [isFavClicked, setIsFavClicked] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handlerClickFavorite = () => {
    setIsFavClicked(!isFavClicked);

    post(`/pets/favorite/${pet.id}`, {}).then((res) => {
      const {isFavorite} = res.data.data.favoritePet;
    
      if (isFavorite) {
        dispatch(setState("success"));
        dispatch(
          stateMessage(
            `::${pet.name}:: añadido a tus favoritos 🐶`
          )
        );
      }else{
        dispatch(setState("error"));
        dispatch(
          stateMessage(
            `::${pet.name}:: eliminado de tus favoritos 💔😥`
          )
        );
      }
    });

    setMessage("");
    onClose();
  };


  return (
    <Box>
      <Card maxW={{ base: "sm", md: "none" }}>
        <CardBody>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Image
              src={pet.image ? `${pet.image}` : ""}
              alt="animal photo"
              width={300}
              height={"100"}
              style={{ objectFit: "cover", height: "300px" }}
              borderradius="lg"
            />
          </div>
          <Stack mt="6" spacing="3">
            <Heading size="md">
              {pet.name}, tamaño: {pet.size}
            </Heading>
            <Text>{pet.description}</Text>
            <SinglePet
              pet={pet}
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            {user ? (
              <>
                <RequestForm pet={pet} />

                <FavoriteIcon colorScheme="blue" isFavorited={isFavClicked} event={handlerClickFavorite} />

              </>
            ) : (
              <></>
            )}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default PetCard;
