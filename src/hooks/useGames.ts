import { useQuery } from "@tanstack/react-query";
//  import games from "../data/games";
import { Game, GameQuery } from "../entities";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
    // initialData: () => ({
    //   count: games.length,
    //   results: games,
    // }),
  });

export default useGames;
