import { Flex, Link } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Flex
        bg={"secondary.900"}
        px={"24px"}
        py={"16px"}
        h={"56px"}
        justifyContent={"center"}
      >
        <Link
          bgGradient="linear(to-tl, #050D21, #C98474, #050D21)"
          bgClip="text"
          fontSize="xl"
          fontWeight="extrabold"
          fontStyle={"italic"}
          w={"200px"}
          href={""}
          textAlign={"center"}
        >
          XCTF.LIVE •
        </Link>
      </Flex>
    </>
  );
}
