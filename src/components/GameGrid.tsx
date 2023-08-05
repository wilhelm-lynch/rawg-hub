import { Text } from "@chakra-ui/layout";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames("/games");

  return (
    <>
      <Text>{error}</Text>
      <ul className="list-group">
        {games.map((game) => (
          <li key={game.id} className="list-group-item">
            {game.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
