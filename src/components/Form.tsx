import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import Subheading from "./Subheading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  const [state, setState] = useState({
    url: "",
  });

  function handleKeyDown(event: any) {
    if (event.key === "Enter") {
      if (state.url.length) {
        onSubmit(event);
      }
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const changeUrl = (event: any) => {
    setState({
      url: event.target.value,
    });
  };
  const toast = useToast();
  const onSubmit = (event: any) => {
    event.preventDefault();
    const registered = {
      url: state.url,
    };
    if (state.url.length) {
      axios
        .post("http://localhost:4000/submitrace", registered)
        .then(() => {
          setState({
            url: "",
          });
        })
        .then(() => {
          toast({
            title: `Race URL submitted, thank you!`,
            status: "success",
            isClosable: true,
            position: "top",
          });
        });
    }
  };

  return (
    <Flex mt={5} w={"100%"} justifyContent={"center"}>
      <Box
        w={"fit-content"}
        p={"5"}
        rounded={"lg"}
        bgColor={"secondary.700"}
        alignItems={"center"}
      >
        <Subheading text={"Are we missing a race?"} />
        <Flex w={"70%"} m={"auto"}>
          <InputGroup size="md" mt={"5"} onSubmit={onSubmit}>
            <Input
              type="text"
              placeholder="Race URL"
              onChange={changeUrl}
              value={state.url}
              color={"white"}
              onSubmit={onSubmit}
            />
            <InputRightElement pr={"2"}>
              <Button
                backgroundColor={"transparent"}
                color={"white"}
                size="sm"
                onClick={onSubmit}
                _hover={{
                  backgroundColor: "transparent",
                  color: "gray",
                }}
              >
                <FontAwesomeIcon icon={faShare} />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Box>
    </Flex>
  );
}
