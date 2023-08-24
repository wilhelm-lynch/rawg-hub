import { useParams } from "react-router-dom";
import { useGame } from "../hooks";
import { Spinner } from "@chakra-ui/spinner";
import { Heading, Text } from "@chakra-ui/layout";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
