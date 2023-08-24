import { useQuery } from "@tanstack/react-query";
import { Games } from "../entities";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Games>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
