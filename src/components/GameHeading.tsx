import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

interface SortOrderLabels {
  [key: string]: string;
}

const sortOrderLabels: SortOrderLabels = {
  "": "Relevance",
  "-added": "Date Added",
  name: "Name",
  "-released": "Release Date",
  "-metacritic": "Average Rating",
  "-rating": "Most Popular",
};

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } ${sortOrderLabels[gameQuery.sortOrder || ""]} ${
    gameQuery.searchText ? `"${gameQuery.searchText}"` : ""
  } Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
