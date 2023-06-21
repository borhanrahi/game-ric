import { HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import GameImageCard from "./GameImageCard";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <GameImageCard imageSrc={game.background_image} gameName={game.name}>
      <HStack justifyContent="space-between">
        <PlatformIconList platforms={game.parent_platforms} />
        <CriticScore score={game.metacritic} />
      </HStack>
    </GameImageCard>
  );
};

export default GameCard;
