import { Box, HStack, Stack, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  sort: any;
  platform: Platform | null;
  genre: Genre | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    platform: null,
    genre: null,
  } as GameQuery);

  const handleSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  return (
    <Box>
      <NavBar
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
      />
      <Stack
        padding={{ base: 5, lg: 10 }}
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "4", lg: "4" }}
      >
        <Box display={{ base: "none", lg: "block" }} width="20%">
          <GenreList
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
          />
        </Box>
        <VStack>
          <HStack display="flex" alignItems="center">
            <GameHeading gameQuery={gameQuery} />
            <Box flex="1">
              <PlatformSelector onSelectPlatform={handleSelectPlatform} />
            </Box>
            <Box marginLeft="1rem">
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(setOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder: setOrder })
                }
              />
            </Box>
          </HStack>

          <Box width={{ base: "100%", lg: "80%" }} px={{ base: "4", lg: "0" }}>
            <GameGrid gameQuery={gameQuery} />
          </Box>
        </VStack>
      </Stack>
    </Box>
  );
}

export default App;
