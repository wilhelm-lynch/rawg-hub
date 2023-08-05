import Game from "./games";

export default interface FetchGameResponse{
  count: number,
  results: Game[];
}