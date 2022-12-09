import { Text, VStack, Image, HStack, Flex, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import axios from "axios";

const IMAGES = {
  NYSPHAA:
    "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png",
  "Section I":
    "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png",
  "Section II":
    "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png",
  "Section III":
    "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png",
  "Section IV":
    "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png",
  "Section V":
    "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png",
  "Section VI":
    "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png",
  "Section VII":
    "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png",
  "Section VIII":
    "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png",
  "Section IX":
    "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png",
  "Section X":
    "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png",
  "Section XI":
    "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png",
  FLORIDA:
    "https://dbukjj6eu5tsf.cloudfront.net/fhsaa.org/images/responsive/main_logo_lg2.svg",
  "CHAMPS SPORTS": "https://footlockercc.com/images/ChampsXCLogo.gif",
  NEBRASKA:
    "https://nebraskanewsservice.net/wp-content/uploads/2020/07/download-12.png",
  CHICAGO:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Chicago_Athletic_Association_logo.svg/1200px-Chicago_Athletic_Association_logo.svg.png",
};

function returnImage(images: { [key: string]: string }, input: string) {
  // Convert the input string to lowercase
  // to avoid case-sensitivity issues
  input = input.toLowerCase();

  // Loop through the key-value pairs in the images object
  for (const [key, value] of Object.entries(images)) {
    // Check if the input string contains the key
    if (input.includes(key.toLowerCase())) {
      // If it does, return the corresponding value (the URL of the image)
      return value;
    }
  }
  // If the input string does not contain any of the keys,
  // return undefined
  return undefined;
}

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
          <Image
            objectFit={"cover"}
            src={returnImage(IMAGES, item.name + " , " + item.location)}
          />
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
        <Flex
          width={20}
          justifyContent={"right"}
          _hover={{
            color: item.isHighlighted ? "#969326" : "#a1a1a1",
          }}
          color={item.isHighlighted ? "yellow" : "#666666"}
          transitionDuration={"100ms"}
        >
          <FontAwesomeIcon
            icon={faStar}
            onClick={() => toggleHighlight(item)}
            size={"lg"}
          />
        </Flex>
      </HStack>
    </Link>
  );
}
