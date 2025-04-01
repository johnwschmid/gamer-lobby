import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import CardContainer from "./CardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  filterGenre: Genre | null;
}

const GameGrid = ({ filterGenre }: Props) => {
  const { data, error, isLoading } = useGames(filterGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text className="alert alert-danger">{error}</Text>}
      <SimpleGrid columns={3} spacing={5} padding={"13px"}>
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
