import { useState, useEffect } from "react";
import { VStack, Flex, List, ListItem, Box } from "@chakra-ui/react";
import MiniRaceCard from "./MiniRaceCard";
import Subheading from "./Subheading";
import axios from "axios";
import { format } from "date-fns";
import MiniRaceCardSkeleton from "./MiniRaceCardSkeleton";

export default function DayRaces() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_API_URL_RACE + "/official")
      .then((res) => {
        setData(res.data);
      })
      .then(() => setIsLoading(false));
  }, []);

  let currentDate = new Date();

  const groups = data.map((item: any) => {
    let givenDate = new Date(item.date);
    givenDate.setDate(givenDate.getDate() + 1);

    currentDate.setHours(0, 0, 0, 0);
    givenDate.setHours(0, 0, 0, 0);
    let minDate = new Date();
    // edit 14 to change the least date 14
    minDate.setTime(minDate.getTime() - 14 * 24 * 60 * 60 * 1000);
    // switch || to && to create interval of shown races
    if (givenDate >= minDate && givenDate <= currentDate) {
      return format(givenDate, "MMMM d, y");
    } else {
      return undefined;
    }
  });

  const uniqueGroups = groups.filter(
    (group, index) => groups.indexOf(group) === index
  );

  const ListComponent = () => {
    return (
      <>
        {uniqueGroups.map((group) => (
          <Flex pt={"5"} flexFlow={"column"} alignItems={"center"}>
            <Subheading
              text={
                group === format(currentDate, "MMMM d, y") ? "Today" : group!
              }
            />
            <VStack
              w={"95%"}
              maxW={"800px"}
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
                      format(
                        new Date(item.date).setDate(
                          new Date(item.date).getDate() + 1
                        ),
                        "MMMM d, y"
                      ) === group
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
      </>
    );
  };
  const SkeletonComponent = () => {
    let skeleData = [
      1231231, 312, 234243242423, 344444, 4312, 92042, 123243242431231,
      32394942912, 329493294234,
    ];
    return (
      <Flex pt={"10"} flexFlow={"column"} alignItems={"center"}>
        <Subheading text="Today" />
        <VStack
          w={"95%"}
          maxW={"800px"}
          mt={1}
          spacing={3}
          overflow={"scroll"}
          backgroundColor={"secondary.900"}
          rounded={"xl"}
        >
          <List w={"100%"}>
            {skeleData.map((n: number) => (
              <ListItem key={n}>
                <MiniRaceCardSkeleton n={n} />
              </ListItem>
            ))}
          </List>
        </VStack>
      </Flex>
    );
  };

  return <Box>{isLoading ? <SkeletonComponent /> : <ListComponent />} </Box>;
}
