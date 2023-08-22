import { Heading } from "@chakra-ui/react";
import { useGenre, usePlatform } from "../hooks";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((sel) => sel.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((sel) => sel.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
