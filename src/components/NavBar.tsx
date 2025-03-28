import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { px } from "framer-motion";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="8px">
      <Image src={logo} boxSize={"50px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
