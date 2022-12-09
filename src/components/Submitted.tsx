import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, List, ListItem } from "@chakra-ui/react";

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
    <List color={"white"}>
      {data.map((item: any) => (
        <ListItem key={item._id}>
          {item.url + " "}
          <Button color={"black"} onClick={() => removeItem(item)}>
            Remove
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default Sumbitted;
