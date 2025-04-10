import { Box, HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingX="20px" paddingY={"15px"} justifyContent={"space-between"}>
      <HStack spacing="60px">
        <Image src={"src/assets/video-game.svg"} boxSize={"65px"} />
        <SearchInput onSearch={onSearch} />
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
