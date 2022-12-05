const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();
app.use(express.json());

const uri = process.env.MONGO_URI;

var database;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.get("/", (req, resp) => {
  resp.send("xctflive mongodb");
});

app.get("/api/races", (req, resp) => {
  database
    .collection("races")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      resp.send(result);
    });
});

app.listen(8080, () => {
  client.connect((err) => {
    if (err) throw err;
    database = client.db("xctflive");
    console.log("Connection successful");
  });
});
