import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number | null;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  if (score === null) {
    return <Badge>N/A</Badge>;
  }

  const formattedScore = score.toFixed(1);

  const scoreRanges = [
    { range: [90, Infinity], color: "green.500" },
    { range: [50, 90], color: "yellow.500" },
    { range: [-Infinity, 50], color: "red.500" },
  ];

  const { color } = scoreRanges.find(
    ({ range }) => score >= range[0] && score < range[1]
  )!;

  return (
    <Badge alignItems="center" bgColor={color}>
      {formattedScore}
    </Badge>
  );
};

export default CriticScore;
