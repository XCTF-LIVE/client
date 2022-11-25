import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Navbar() {
  return (
    <>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        h={16}
        justifyContent={"center"}
      >
        <HStack
          spacing={8}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Box>XCTF.LIVE</Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"#"}
            >
              <FontAwesomeIcon icon={solid("house")} />
            </Link>
            <InputGroup w={"25vw"}>
              <InputLeftElement
                pointerEvents="none"
                children={<FontAwesomeIcon icon={solid("magnifying-glass")} />}
              />
              <Input type="tel" placeholder="Search for a race..." />
            </InputGroup>
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"#"}
            >
              <FontAwesomeIcon icon={solid("person-running")} />
            </Link>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </>
  );
}
