import GameQuery from "../entities/gamequery";
import Game from "../entities/games";
import useData from './useData';


const useGames = (gameQuery: GameQuery) => useData<Game>("/games", {params: {genres: gameQuery.genre?.id , platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.searchText}}, [gameQuery])

export default useGames
