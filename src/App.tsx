import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "230px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="side" paddingX={3}>
          <GenreList onSelectGenre={(g) => setSelectGenre(g)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid filterGenre={selectGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
