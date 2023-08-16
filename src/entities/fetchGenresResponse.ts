import { Genre } from "./";

export default interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
