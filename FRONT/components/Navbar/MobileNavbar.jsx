import { Flex } from "@chakra-ui/react";
import React from "react";
import HomeIcon from './Icons/HomeIcon'
/* import PawIcon from "./Icons/PawIcon"; */
import BellIcon from "./Icons/BellIcon"
import SettIcon from "./Icons/SettIcon"
import ToggleColorMode from "./theme/ToggleColorMode";
import Lottie from 'react-lottie-player'
import cat from "./assets/78625-le-petit-chat-cat-noir.json"
import PawIcon from "./Icons/PawIcon";

const MobileNavbar = () => {
  return (
    <Flex w="100%" pos="fixed" bottom="0">
      <Flex pos="absolute" bottom="40px" width={{base:"35%", sm:"20%"}} display={{base:"flex", md:"none"}}>
      <Lottie loop
    animationData={cat}
    play/>
      </Flex>
    <Flex w="100%" bg="#AEC3B0" justifyContent="space-around" display={{base:"flex", md:"none"}}>
    <HomeIcon />
    <PawIcon />
    <BellIcon/>
    <SettIcon /> 
    <ToggleColorMode />
    </Flex>
    </Flex>
  );
};

export default MobileNavbar;
