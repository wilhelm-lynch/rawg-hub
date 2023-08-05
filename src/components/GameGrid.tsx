import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Game from "../entities/games";
import FetchGameResponse from "../entities/fetchGameResponse";
import { Text } from "@chakra-ui/layout";

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((resp) => setGames(resp.data.results))
      .catch((err: Error) => setError(err.message));
  }, []);

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
