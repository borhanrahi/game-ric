import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

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
}

const useGames = (gameQuery: GameQuery) => {
  const [genre, setGenre] = useState<Genre | null>(null);

  useEffect(() => {
    if (gameQuery.genre) {
      apiClient
        .get<Genre>(`/genres/${gameQuery.genre}`)
        .then((res) => setGenre(res.data))
        .catch((err) => console.error(err));
    } else {
      setGenre(null);
    }
  }, [gameQuery.genre]);

  const {
    genre: gameGenre,
    platform: gamePlatform,
    sortOrder,
    searchText,
  } = gameQuery;
  const params = {
    ...(gameGenre ? { genres: gameGenre.id } : {}),
    ...(gamePlatform ? { platforms: gamePlatform.slug } : {}),
    ordering: sortOrder || undefined,
    search: searchText || undefined, // Add this line to include the search parameter
  };

  return useData<Game>("/games", { params }, [
    gameGenre,
    gamePlatform,
    sortOrder,
    searchText, // Add this line to include searchText to the dependencies array
  ]);
};

export default useGames;
