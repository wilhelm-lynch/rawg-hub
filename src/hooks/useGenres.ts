import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import Genre from '../entities/genres';
import FetchGenresResponse from '../entities/fetchGenresResponse';

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const controller = new AbortController();

  useEffect(() => {
    setLoading(true)
    apiClient
      .get<FetchGenresResponse>("/genres", {signal: controller.signal})
      .then((resp) => {
        setGenres(resp.data.results);
        setLoading(false)
      })
      .catch((err: Error) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)});

      return () => controller.abort()
  },[]);

  return {genres, error, isLoading}
}

export default useGenres
