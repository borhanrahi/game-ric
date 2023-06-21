import useData from "./useData";

export interface Genre {
  poster_path(poster_path: any): string | undefined;
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
