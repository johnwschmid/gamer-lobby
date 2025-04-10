import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import CardContainer from "./CardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text className="alert alert-danger">{error}</Text>}
      <SimpleGrid
        columns={{ md: 2, lg: 3, xl: 4 }}
        spacing={8}
        padding={"13px"}
      >
        {isLoading &&
          skeletons.map((s) => (
            <CardContainer key={s}>
              <SkeletonCard key={s} />
            </CardContainer>
          ))}
        {data.map((g) => (
          <CardContainer key={g.id}>
            <GameCard key={g.id} game={g}></GameCard>
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
