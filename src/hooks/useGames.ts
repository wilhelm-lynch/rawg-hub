import { useEffect, useState } from "react";
import FetchGameResponse from "../entities/fetchGameResponse";
import Game from "../entities/games";
import apiClient, { CanceledError } from "../services/api-client";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const controller = new AbortController();

  useEffect(() => {
    setLoading(true)
    apiClient
      .get<FetchGameResponse>("/games", {signal: controller.signal})
      .then((resp) => {
        setGames(resp.data.results);
        setLoading(false)
      })
      .catch((err: Error) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)});

      return () => controller.abort()
  }, []);

  return {games, error, isLoading}
}

export default useGames
