const mongoose = require("mongoose");
const raceTemplate = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  url: {
    type: String,
    required: true,
  },
  isHighlighted: {
    type: Boolean,
    required: false,
  },
  dateInput: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("races2", raceTemplate);
