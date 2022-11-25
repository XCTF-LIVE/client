import {
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
  Input,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Navbar() {
  return (
    <Flex
      bg={"secondary.900"}
      px={"24px"}
      py={"16px"}
      h={"56px"}
      justifyContent={"center"}
    >
      <HStack
        spacing={8}
        alignItems={"center"}
        justifyContent={"space-between"}
        w={"100%"}
      >
        <Link
          bgGradient="linear(to-tl, #050D21, #C98474, #050D21)"
          bgClip="text"
          fontSize="xl"
          fontWeight="extrabold"
          fontStyle={"italic"}
          w={"150px"}
          href={""}
        >
          XCTF.LIVE
        </Link>
        <HStack as={"nav"} spacing={4}>
          <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              backgroundColor: "secondary.800",
            }}
            href={"#"}
            color={"primary.400"}
          >
            <FontAwesomeIcon icon={solid("house")} size={"lg"} />
          </Link>
          <Input
            w="300px"
            type="tel"
            placeholder="Search for a race..."
            _placeholder={{ color: "grays.700" }}
            color={"grays.700"}
            textAlign={"center"}
            rounded={"full"}
            border={"none"}
            backgroundColor={"secondary.800"}
            _hover={{
              backgroundColor: "secondary.700",
            }}
          />
          <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              backgroundColor: "secondary.800",
            }}
            href={"#"}
            color={"grays.700"}
          >
            <FontAwesomeIcon icon={solid("person-running")} size={"lg"} />
          </Link>
        </HStack>
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
            w={"150px"}
            pl="100px"
            alignContent={"end"}
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
      </HStack>
    </Flex>
  );
}
