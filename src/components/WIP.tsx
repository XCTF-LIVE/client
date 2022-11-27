import { Heading, Flex } from "@chakra-ui/react";

export default function WIP() {
  return (
    <Flex
      p={5}
      backgroundColor={"yellow"}
      justifyContent={"center"}
      flexDir={"column"}
    >
      <Heading
        fontWeight={900}
        color={"grays.900"}
        textTransform={"uppercase"}
        fontSize={"lg"}
        textAlign={"center"}
      >
        Site coming soon!
      </Heading>
      <Heading
        fontWeight={500}
        color={"grays.300"}
        fontSize={"xs"}
        textAlign={"center"}
        fontStyle={"italic"}
      >
        (Below is a <u>static prototype</u> for this site.)
      </Heading>
    </Flex>
  );
}
