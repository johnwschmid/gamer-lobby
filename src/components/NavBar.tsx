import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { px } from "framer-motion";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      paddingX="20px"
      paddingY={"15px"}
      backgroundColor={"coral"}
    >
      <Image src={"src/assets/video-game.svg"} boxSize={"65px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
