import { useState, useEffect } from "react";
import { VStack, Flex, List, ListItem } from "@chakra-ui/react";
import MiniRaceCard from "./MiniRaceCard";
import Subheading from "./Subheading";
import axios from "axios";
import MiniRaceCardSkeleton from "./MiniRaceCardSkeleton";

export default function HighlightedRaces() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://api.xctf.live/race/highlighted")
      .then((res) => {
        setData(res.data);
      })
      .then(() => setIsLoading(false));
  }, []);

  const ListComponent = () => {
    return (
      <List w={"100%"}>
        {data.map((item: any) => (
          <ListItem key={item._id}>
            <MiniRaceCard item={item} />
          </ListItem>
        ))}
      </List>
    );
  };
  const SkeletonComponent = () => {
    let skeleData = [1231231, 312, 123423143243];
    return (
      <List w={"100%"}>
        {skeleData.map((n: number) => (
          <ListItem key={n}>
            <MiniRaceCardSkeleton n={n} />
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Flex pt={5} flexFlow={"column"} alignItems={"center"}>
      <Subheading text={"PINNED"} />
      <VStack
        boxShadow="0 0 5px 0px yellow"
        w={"95%"}
        maxW={"800px"}
        mt={1}
        spacing={3}
        overflow={"scroll"}
        backgroundColor={"secondary.900"}
        rounded={"xl"}
      >
        {isLoading ? <SkeletonComponent /> : <ListComponent />}
      </VStack>
    </Flex>
  );
}
