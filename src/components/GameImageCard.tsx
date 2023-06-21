import { Box, Text, Flex } from "@chakra-ui/react";

interface GameImageCardProps {
  imageSrc: string;
  gameName: string;
  children: React.ReactNode;
}

const GameImageCard = ({
  imageSrc,
  gameName,
  children,
}: GameImageCardProps) => (
  <Flex justifyContent="center">
    <Box borderRadius={10} maxW={400}>
      <Box
        as="img"
        src={imageSrc}
        alt={gameName}
        borderRadius={10}
        width="400px"
        height="250px"
        objectFit="cover"
      />
      <Box padding={4} paddingLeft={{ base: 0 }}>
        <Text fontSize={{ base: "xl", md: "2xl" }}>{gameName}</Text>
        {children}
      </Box>
    </Box>
  </Flex>
);

export default GameImageCard;
