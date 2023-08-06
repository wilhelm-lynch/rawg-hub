import Genre from "./genres";

export default interface FetchGenresResponse{
  count: number,
  results: Genre[]
}