// Import the fontawesome library and the icons you want to use
import { Box } from "@chakra-ui/react";

// Replace the imported icons from react-icons with the imported icons from fontawesome
export default function SmallWithSocial() {
  return (
    <Box
      mt={5}
      py={4}
      bgColor={"secondary.800"}
      color={"secondary.300"}
      textAlign={"center"}
      fontSize={"xs"}
    >
      © 2022 XCTF LIVE. All rights reserved
    </Box>
  );
}
