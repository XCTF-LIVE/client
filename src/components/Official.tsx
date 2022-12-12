import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, List, ListItem } from "@chakra-ui/react";
import MiniRaceCard from "./MiniRaceCard";

export default function Official() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://xctf-live-backend.herokuapp.com/race" + "/official")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const toggleHighlight = (item: any) => {
    axios
      .post(
        "https://xctf-live-backend.herokuapp.com/race" + "/toggleracehighlight",
        {
          document: item,
        }
      )
      .then(() => window.location.reload());
  };

  return (
    <List>
      {data.map((item: any) => (
        <ListItem key={item._id}>
          <MiniRaceCard item={item} />
          <Button onClick={() => toggleHighlight(item)}>
            Toggle Highlight
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
