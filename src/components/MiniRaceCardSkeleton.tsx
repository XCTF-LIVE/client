import { Text, VStack, HStack, Flex, Link, Skeleton } from "@chakra-ui/react";

interface Input {
  n: number;
}

export default function MiniRaceCardSkeleton({ n }: Input) {
  return (
    <Link
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      px={5}
      py={2}
      bgColor="secondary.400"
      transitionDuration={"100ms"}
      _hover={{
        bgColor: "secondary.500",
        boxShadow: "lg",
      }}
      borderBottomWidth={"2px"}
      borderBottomColor={"secondary.600"}
    >
      <Skeleton>
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Flex width={20} justifyContent={"right"}>
            t
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
              {n}
              <Text
                color={"grays.300"}
                fontSize={"xs"}
                textTransform={"uppercase"}
              >
                {n}
              </Text>
            </Text>
          </VStack>
          <Flex width={20} justifyContent={"right"}>
            t
          </Flex>
        </HStack>
      </Skeleton>
    </Link>
  );
}
