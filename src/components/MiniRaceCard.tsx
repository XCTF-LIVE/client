import { Text, VStack, Image, HStack, Flex } from "@chakra-ui/react";

const IMAGE =
  "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png";

export default function MiniRaceCard() {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"100%"}
      p={5}
      backgroundColor={"gray.200"}
      borderRadius={"xl"}
    >
      <HStack>
        <Image h={10} objectFit={"cover"} src={IMAGE} />
        <VStack alignItems={"left"} p={0} m={0}>
          <Text
            fontSize={"xl"}
            fontFamily={"body"}
            fontWeight={900}
            textTransform={"uppercase"}
          >
            2022 NYSPHAA XC Championships
            <Text
              color={"gray.500"}
              fontSize={"xs"}
              textTransform={"uppercase"}
            >
              Letchworth State Park, NY
            </Text>
          </Text>
        </VStack>
      </HStack>
      <Flex
        fontWeight={900}
        fontSize={"sm"}
        color={"white"}
        textTransform={"uppercase"}
        backgroundColor={"red.500"}
        px={2}
        borderRadius={100}
        h={"min-content"}
      >
        LIVE TODAY
      </Flex>
    </Flex>
  );
}
