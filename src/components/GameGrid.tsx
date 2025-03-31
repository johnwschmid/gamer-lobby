import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text className="alert alert-danger">{error}</Text>}
      <SimpleGrid columns={3} spacing={10} padding={"10px"}>
        {isLoading && skeletons.map((s) => <SkeletonCard key={s} />)}
        {games.map((g) => (
          <GameCard key={g.id} game={g}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
