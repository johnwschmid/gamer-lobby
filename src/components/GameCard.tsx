import { HStack, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <HStack
          justifyContent={"space-between"}
          marginTop={"-10px"}
          paddingBottom="8px"
        >
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIcons>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"1xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
