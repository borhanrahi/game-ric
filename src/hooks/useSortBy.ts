import { useState } from "react";

type GameResult = {
  id: number;
  name: string;
  released: string;
  added: number;
  rating: number;
  ratings_average: number;
};

type SortByOption =
  | "relevance"
  | "date-added"
  | "name"
  | "release-date"
  | "popularity"
  | "average-rating";

const useSortBy = (initialSortBy: SortByOption = "relevance") => {
  const [sortBy, setSortBy] = useState<SortByOption>(initialSortBy);

  const handleSortBy = (newSortBy: SortByOption) => {
    setSortBy(newSortBy);
  };

  const sortFunctions = {
    "date-added": (a: GameResult, b: GameResult) => b.added - a.added,
    name: (a: GameResult, b: GameResult) => a.name.localeCompare(b.name),
    "release-date": (a: GameResult, b: GameResult) =>
      a.released > b.released ? 1 : b.released > a.released ? -1 : 0,
    popularity: (a: GameResult, b: GameResult) => b.rating - a.rating,
    "average-rating": (a: GameResult, b: GameResult) =>
      b.ratings_average - a.ratings_average,
    relevance: (a: GameResult, b: GameResult) => 0, // default sorting function
  };

  const sortResults = (results: Array<GameResult>) =>
    [...results].sort(sortFunctions[sortBy] || sortFunctions.relevance);

  return [sortBy, handleSortBy, sortResults] as const;
};

export default useSortBy;
