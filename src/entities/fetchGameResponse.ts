import { Game } from "./";

export default interface FetchGameResponse {
  count: number;
  results: Game[];
}
