import { useState, useEffect } from "react";
import { VStack, Flex, List, ListItem } from "@chakra-ui/react";
import MiniRaceCard from "./MiniRaceCard";
import Subheading from "./Subheading";
import axios from "axios";

export default function DayRaces() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/highlighted").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Flex pt={5} flexFlow={"column"} alignItems={"center"}>
      <Subheading text={"HIGHLIGHTS"} />
      <VStack
        boxShadow="0 0 5px 0px yellow"
        w={"70%"}
        mt={1}
        spacing={3}
        overflow={"scroll"}
        backgroundColor={"secondary.900"}
        rounded={"xl"}
      >
        <List w={"100%"}>
          {data.map((item: any) => (
            <ListItem key={item._id}>
              <MiniRaceCard item={item} />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Flex>
  );
}
