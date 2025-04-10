import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading === true) return <Spinner marginTop={3} />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List marginTop={3}>
        {data.map((g) => (
          <ListItem key={g.id} paddingY={1}>
            <HStack spacing={2}>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImage(g.image_background)}
                objectFit={"cover"}
              />
              <Button
                fontWeight={g.id === selectedGenre?.id ? "extrabold" : "normal"}
                onClick={() => onSelectGenre(g)}
                variant="link"
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {g.name}{" "}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
