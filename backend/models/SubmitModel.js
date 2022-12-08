const mongoose = require("mongoose");
const submitRaceTemplate = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("userRaces", submitRaceTemplate);
