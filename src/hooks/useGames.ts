import { useInfiniteQuery } from "@tanstack/react-query";
import { Game, GameQuery } from "../entities";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Game>("/games");

//** UseQuery **//
// const useGames = (gameQuery: GameQuery) =>
//   useQuery({
//     queryKey: ["games", gameQuery],
//     queryFn: () =>
//       apiClient.getAll({
//         params: {
//           genres: gameQuery.genre?.id,
//           parent_platforms: gameQuery.platform?.id,
//           ordering: gameQuery.sortOrder,
//           search: gameQuery.searchText,
//         },
//       }),
//     staleTime: 24 * 60 * 60 * 1000,
//     // initialData: () => ({
//     //   count: games.length,
//     //   results: games,
//     // }),
//   });

// ** Infinite Query ** //
const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
    // initialData: () => ({
    //   count: games.length,
    //   results: games,
    // }),
  });

export default useGames;
