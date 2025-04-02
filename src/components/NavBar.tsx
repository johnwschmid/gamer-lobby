import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} paddingX="20px" paddingY={"15px"}>
      <Image src={"src/assets/video-game.svg"} boxSize={"65px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
