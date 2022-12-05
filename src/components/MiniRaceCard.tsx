import { Text, VStack, Image, HStack, Flex, Link } from "@chakra-ui/react";

const IMAGE =
  "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png";

export default function MiniRaceCard() {
  return (
    <Link
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"100%"}
      p={5}
      bgColor="secondary.400"
      borderRadius={"xl"}
      transitionDuration={"150ms"}
      _hover={{
        bgColor: "secondary.500",
        boxShadow: "lg",
      }}
      href={"https://results.leonetiming.com/xc.html?mid=5251"}
    >
      <HStack>
        <Image h={10} objectFit={"cover"} src={IMAGE} />
        <VStack alignItems={"left"} p={0} m={0}>
          <Text
            fontSize={"xl"}
            fontFamily={"body"}
            fontWeight={900}
            textTransform={"uppercase"}
            color={"grays.100"}
          >
            2022 NYSPHAA XC Championships
            <Text
              color={"grays.300"}
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
        LIVE •
      </Flex>
    </Link>
  );
}
