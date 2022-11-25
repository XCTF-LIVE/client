import { HStack } from "@chakra-ui/react";
import RaceCard from "./RaceCard";
import Subheading from "./Subheading";

export default function HighlightedRaces() {
  return (
    <>
      {Subheading("Trending")}
      <HStack spacing={10} overflow={"scroll"} scrollBehavior={"smooth"} mt={1}>
        <RaceCard />
        <RaceCard />
        <RaceCard />
        <RaceCard />
        <RaceCard />
        <RaceCard />
        <RaceCard />
      </HStack>
    </>
  );
}
