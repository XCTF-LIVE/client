const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");
const raceSchema = require("./models/SubmitModel.js");

dotenv.config();

router.get("/", (req, res) => {
  raceSchema
    .find({})
    .then((data) => {
      console.log("Data: " + data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
});

mongoose.connect(
  process.env.DATABASE_ACCESS,
  {
    useNewUrlParser: true,
  },
  () => console.log("Database connected")
);

app.use(express.json());
app.use(cors());
app.use("/", routesUrls);
app.listen(4000, () => {
  console.log("Server is up and running.");
});
