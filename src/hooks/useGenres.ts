import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import Genre from "../entities/genres";
import FetchResponse from "../entities/fetchResponse";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((resp) => resp.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: () => ({
      count: genres.length,
      results: genres,
    }),
  });

export default useGenres;
