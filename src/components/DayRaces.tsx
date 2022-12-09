import { useState, useEffect } from "react";
import { VStack, Flex, List, ListItem, Box } from "@chakra-ui/react";
import MiniRaceCard from "./MiniRaceCard";
import Subheading from "./Subheading";
import axios from "axios";
import { format } from "date-fns";

export default function DayRaces() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/official").then((res) => {
      setData(res.data);
    });
  }, []);

  let currentDate = new Date();
  const groups = data.map((item: any) => {
    let givenDate = new Date(item.date);

    currentDate.setHours(0, 0, 0, 0);
    givenDate.setHours(0, 0, 0, 0);
    let minDate = new Date();
    minDate.setTime(minDate.getTime() - 14 * 24 * 60 * 60 * 1000);

    if (givenDate >= minDate && givenDate <= currentDate) {
      return format(givenDate, "MMMM d, y");
    } else {
      return undefined;
    }
  });

  const uniqueGroups = groups.filter(
    (group, index) => groups.indexOf(group) === index
  );

  return (
    <Box>
      {uniqueGroups.map((group) => (
        <Flex pt={"5"} flexFlow={"column"} alignItems={"center"}>
          <Subheading
            text={group === format(currentDate, "MMMM d, y") ? "Today" : group!}
          />
          <VStack
            w={"70%"}
            mt={1}
            spacing={3}
            overflow={"scroll"}
            backgroundColor={"secondary.900"}
            rounded={"xl"}
          >
            <List w={"100%"}>
              {data
                .filter(
                  (item: any) =>
                    format(new Date(item.date), "MMMM d, y") === group
                )
                .map((item: any) => (
                  <ListItem key={item._id}>
                    <MiniRaceCard item={item} />
                  </ListItem>
                ))}
            </List>
          </VStack>
        </Flex>
      ))}
    </Box>
  );
}
