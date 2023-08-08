import Genre from "./genres"
import Platform from "./platform"

export default interface GameQuery{
  genre: Genre | null,
  platform: Platform | null,
  sortOrder: string,
  searchText: string
}