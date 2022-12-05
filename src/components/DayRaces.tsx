import { VStack, Flex } from "@chakra-ui/react";
import MiniRaceCard from "./MiniRaceCard";
import Subheading from "./Subheading";

interface DayRacesInput {
  title: string;
}

export default function DayRaces({ title }: DayRacesInput) {
  return (
    <Flex flexFlow={"column"} alignItems={"center"}>
      <Subheading text={title} />
      <VStack
        w={"70%"}
        p={5}
        mt={1}
        spacing={3}
        overflow={"scroll"}
        backgroundColor={"secondary.900"}
        rounded={"xl"}
      >
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
