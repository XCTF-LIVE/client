import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Flex, List, ListItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Subheading from "./Subheading";

const Sumbitted = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/submitted").then((res) => {
      setData(res.data);
    });
  }, []);

  const removeItem = (item: any) => {
    axios
      .delete("http://localhost:4000/removesubmitted/" + item._id)
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <Flex flexFlow={"column"} justifyContent={"center"} pt={5}>
      <Subheading text={"Submitted URLS"} />
      <List
        background={"secondary.500"}
        w={"fit-content"}
        color={"white"}
        pl={4}
        rounded={"lg"}
        m={"auto"}
      >
        {data.map((item: any) => (
          <ListItem
            key={item._id}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {item.url + " "}
            <Button
              background={"transparent"}
              color={"red"}
              onClick={() => removeItem(item)}
            >
              <FontAwesomeIcon icon={faX} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default Sumbitted;
