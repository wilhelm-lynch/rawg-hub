import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import {
  GameGrid,
  GameHeading,
  GenreList,
  PlatformSelector,
  SortSelector,
} from "../components";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeading />
          <HStack spacing={4} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
