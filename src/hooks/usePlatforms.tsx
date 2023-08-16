import platforms from "../data/platforms";
import { FetchResponse, Platform } from "../entities";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

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
