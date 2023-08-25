import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useGenres } from "../hooks";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import { GenreListSkeleton } from ".";

const GenreList = () => {
  const { data: genres, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((sel) => sel.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((sel) => sel.setGenreId);

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      {isLoading && <GenreListSkeleton />}
      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant="link"
                fontSize="lg"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
