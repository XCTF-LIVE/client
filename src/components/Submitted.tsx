import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Flex, Link, List, ListItem, Skeleton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Subheading from "./Subheading";

const Sumbitted = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(process.env.https://xctf-live-backend.herokuapp.com/race + "/submitted")
      .then((res) => {
        setData(res.data);
      })
      .then(() => setIsLoading(false));
  }, []);

  const removeItem = (item: any) => {
    axios
      .delete(
        process.env.https://xctf-live-backend.herokuapp.com/race +
          "/removesubmitted/" +
          item._id
      )
      .then(() => {
        window.location.reload();
      });
  };
  const ListComponent = () => {
    return (
      <List
        background={"secondary.500"}
        w={"70%"}
        color={"white"}
        rounded={"lg"}
        m={"auto"}
      >
        {data.map((item: any) => (
          <ListItem
            key={item._id}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottomWidth={"2px"}
            pl={4}
            borderBottomColor={"secondary.600"}
          >
            <Link
              href={
                /^https:\/\//.test(item.url) ? item.url : "https://" + item.url
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.url}
            </Link>
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
    );
  };
  const SkeletonComponent = () => {
    let skeleData = [
      1341342143, 223424, 23443, 412344, 45, 6143413241242134, 342427, 894342,
      234239, 123423420, 2189412394, 2412398492314981284932, 2398423,
      239842949823, 25319253,
    ];
    return (
      <List
        background={"secondary.500"}
        w={"70%"}
        color={"white"}
        rounded={"lg"}
        m={"auto"}
      >
        {skeleData.map((n: number) => (
          <ListItem
            key={n}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottomWidth={"2px"}
            pl={4}
            borderBottomColor={"secondary.600"}
          >
            <Skeleton>{n}</Skeleton>
            <Button background={"transparent"} color={"red"}>
              <FontAwesomeIcon icon={faX} />
            </Button>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Flex flexFlow={"column"} justifyContent={"center"} pt={5}>
      <Subheading text={"Submitted URLS"} />
      {isLoading ? <SkeletonComponent /> : <ListComponent />}
    </Flex>
  );
};

export default Sumbitted;
