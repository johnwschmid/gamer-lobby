import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

const useGames = (filterGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: filterGenre?.id } }, [
    filterGenre,
  ]);

export default useGames;
