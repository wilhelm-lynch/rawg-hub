import platforms from "../data/platforms";
import Platform from "../entities/platform";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import FetchResponse from "../entities/fetchResponse";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((resp) => resp.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: () => ({
      count: platforms.length,
      results: platforms,
    }),
  });

export default usePlatforms;
