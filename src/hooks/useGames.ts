import { useEffect, useState } from "react";
import FetchGameResponse from "../entities/fetchGameResponse";
import Game from "../entities/games";
import apiClient, { CanceledError } from "../services/api-client";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const controller = new AbortController();

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games", {signal: controller.signal})
      .then((resp) => setGames(resp.data.results))
      .catch((err: Error) => {
        if(err instanceof CanceledError) return;
        setError(err.message)});

      return () => controller.abort()
  }, []);

  return {games, error}
}

export default useGames
