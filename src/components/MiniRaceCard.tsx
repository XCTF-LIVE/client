import { Text, VStack, Image, HStack, Flex, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import axios from "axios";

const IMAGE =
  "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png";

type Item = {
  date: string;
  dateInput: string;
  isHighlighted: boolean;
  location: string;
  name: string;
  url: string;
  _id: string;
};

export default function MiniRaceCard({ item }: { item: Item }) {
  const toggleHighlight = (item: any) => {
    axios
      .post("http://localhost:4000/toggleracehighlight", {
        document: item,
      })
      .then(() => window.location.reload());
  };
  return (
    <Link
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"100%"}
      p={5}
      bgColor="secondary.400"
      transitionDuration={"150ms"}
      _hover={{
        bgColor: "secondary.500",
        boxShadow: "lg",
      }}
      borderBottomWidth={"2px"}
      borderBottomColor={"secondary.600"}
      href={item.url}
    >
      <HStack w={"100%"} justifyContent={"space-between"}>
        <Flex width={20} justifyContent={"right"}>
          <Image objectFit={"cover"} src={IMAGE} />
        </Flex>
        <VStack alignItems={"left"} p={0} m={0}>
          <Text
            fontSize={"lg"}
            fontFamily={"body"}
            fontWeight={900}
            textTransform={"uppercase"}
            color={"grays.100"}
            textAlign={"center"}
          >
            {item.name}
            <Text
              color={"grays.300"}
              fontSize={"xs"}
              textTransform={"uppercase"}
            >
              {item.location + " // " + format(new Date(item.date), "M/d")}
            </Text>
          </Text>
        </VStack>
        <Flex width={20} justifyContent={"right"}>
          <FontAwesomeIcon
            icon={faStar}
            onClick={() => toggleHighlight(item)}
            size={"lg"}
            color={item.isHighlighted ? "yellow" : "#666666"}
          />
        </Flex>
      </HStack>
    </Link>
  );
}
