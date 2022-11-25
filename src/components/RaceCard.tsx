import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Link,
} from "@chakra-ui/react";

const IMAGE =
  "https://assets.sp.milesplit.com/articles/271222/images/new_project_(10).png";

export default function RaceCard() {
  return (
    <Center>
      <Link
        role={"group"}
        pb={5}
        w={"500px"}
        bgGradient="linear(to-tl, #182D4D, #151926, #182D4D)"
        boxShadow={"s"}
        rounded={"xl"}
        pos={"relative"}
        zIndex={1}
        _hover={{
          bgGradient: "linear(to-tl, #182D4D, #5073A8)",
          boxShadow: "lg",
        }}
        href={"https://results.leonetiming.com/xc.html?mid=5251"}
      >
        <Image
          roundedTop={"xl"}
          height={120}
          width={500}
          objectFit={"cover"}
          src={IMAGE}
        />
        <Stack pt={5} align={"center"}>
          <Text color={"grays.300"} fontSize={"sm"} textTransform={"uppercase"}>
            Letchworth State Park
          </Text>
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={900}
            textTransform={"uppercase"}
            color={"grays.100"}
          >
            2022 NYSPHAA XC Championships
          </Heading>
          <Box
            fontWeight={900}
            fontSize={"sm"}
            color={"white"}
            textTransform={"uppercase"}
            backgroundColor={"red.500"}
            px={2}
            borderRadius={100}
          >
            LIVE TODAY
          </Box>
        </Stack>
      </Link>
    </Center>
  );
}
