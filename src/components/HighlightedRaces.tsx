import { HStack } from "@chakra-ui/react";
import RaceCard from "./RaceCard";
import Subheading from "./Subheading";

interface HighlightedRacesInput {
  races: any;
}

export default function HighlightedRaces({ races }: HighlightedRacesInput) {
  console.log(races);
  return (
    <>
      <Subheading text={"Trending"} />
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
