import { useQuery } from "@tanstack/react-query";
//  import games from "../data/games";
import { FetchResponse, Game, GameQuery } from "../entities";
import apiClient from "../services/api-client";

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((resp) => resp.data),
    staleTime: 24 * 60 * 60 * 1000,
    // initialData: () => ({
    //   count: games.length,
    //   results: games,
    // }),
  });

export default useGames;
