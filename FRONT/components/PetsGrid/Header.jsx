import { Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import doggie from "./Assets/adopt.jpg";
import hug from "./Assets/107772-pet-hug.json";
import Lottie from "react-lottie-player";
import { useDispatch } from "react-redux";
import { setPetsFamilyFilter } from "../../redux/slices/petsFamilySlice";

const Header = () => {
  const dispatch= useDispatch()

  const filterPetsByFamily = (family) => {
    dispatch(setPetsFamilyFilter(family));
  }

  return (
    <Flex w="100%" direction="column" alignItems="center" mt={{ md: "80px" }}>
      <Flex
        bg="white"
        pos="relative"
        overflow="hidden"
        w={{base:"100%", md: "80%" }}
        h={{base:"200", md:"400px"}}
        borderRadius="50"
      >
        <Image fill src={doggie} alt="Animalitos" objectFit="contain" />
      </Flex>
      <Flex mt="10px" justify="center">
        <Flex
          alignItems="center"
          justify="center"
          w="60%"
          bg="#FFFFFF"
          display={{ base: "none", md: "flex" }}
        >
          <Flex w="10%">
            <Lottie loop animationData={hug} play />
          </Flex>
          <Heading size="lg" color="#283D3B">
            Encontrá a tu nuevo mejor amigo
          </Heading>
        </Flex>
        <Flex display={{ base: "flex", md: "none" }}>
          <ButtonGroup>
            <Button onClick={() => filterPetsByFamily("dog")}>Perros</Button>
            <Button onClick={() => filterPetsByFamily("cat")}>Gatos</Button>
            <Button onClick={() => filterPetsByFamily("")}>Otros</Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
