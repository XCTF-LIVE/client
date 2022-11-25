import { VStack, Flex } from "@chakra-ui/react";
import MiniRaceCard from "./MiniRaceCard";
import Subheading from "./Subheading";

export default function DayRaces(date: string) {
  return (
    <Flex flexFlow={"column"} alignItems={"center"}>
      {Subheading(date)}
      <VStack w={"70%"} pt={5} spacing={3} overflow={"scroll"}>
        <MiniRaceCard />
        <MiniRaceCard />
        <MiniRaceCard />
        <MiniRaceCard />
        <MiniRaceCard />
        <MiniRaceCard />
        <MiniRaceCard />
      </VStack>
    </Flex>
  );
}
