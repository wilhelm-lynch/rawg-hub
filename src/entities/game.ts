import { Publisher } from "./publisher";
import { Genre, Platform } from ".";

export default interface Game {
  id: number;
  name: string;
  genres: Genre[];
  publishers: Publisher[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
  slug: string;
}
