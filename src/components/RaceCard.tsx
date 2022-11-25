import { Box, Center, Heading, Text, Stack, Image } from "@chakra-ui/react";

const IMAGE =
  "https://assets.sp.milesplit.com/articles/271222/images/new_project_(10).png";

export default function RaceCard() {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        w={"500px"}
        bg={"gray.100"}
        boxShadow={"lg"}
        rounded={"xl"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"xl"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"xl"}
            height={230}
            width={500}
            objectFit={"cover"}
            src={IMAGE}
          />
        </Box>
        <Stack pt={5} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Letchworth State Park
          </Text>
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={900}
            textTransform={"uppercase"}
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
      </Box>
    </Center>
  );
}
