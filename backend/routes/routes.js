const express = require("express");
const router = express.Router();
const submittedRaceModel = require("../models/SubmitModel");
const officialRaceModel = require("../models/RaceModel");

router.post("/submitrace", async (request, response) => {
  const submittedRace = new submittedRaceModel({
    url: request.body.url,
  });
  submittedRace
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.post("/toggleracehighlight", async (request, response) => {
  const race = request.body.document;
  const updatedData = {
    name: race.name,
    location: race.location,
    date: race.date,
    url: race.url,
    isHighlighted: !race.isHighlighted,
    dateInput: race.dateInput,
  };
  officialRaceModel.updateOne(race, { $set: updatedData }, (err, result) => {
    if (err) {
      response.status(500).send(err);
      return;
    }
    response.json(updatedData);
  });
});

router.get("/submitted", async (request, response) => {
  submittedRaceModel.find(
    {},
    null,
    {
      sort: {
        isHighlighted: -1,
      },
    },
    function (err, races) {
      if (err) {
        console.log(err);
        return;
      }
      response.json(races);
    }
  );
});
router.delete("/removesubmitted/:id", async (request, response) => {
  submittedRaceModel.findByIdAndDelete(request.params.id, (err, result) => {
    if (err) {
      response.status(500).send(err);
      return;
    }
    response.send(result);
  });
});

router.get("/highlighted", async (request, response) => {
  officialRaceModel.find(
    { isHighlighted: true },
    null,
    {
      sort: {
        date: -1,
      },
    },
    function (err, races) {
      if (err) {
        console.log(err);
        return;
      }
      response.json(races);
    }
  );
});
router.get("/official", async (request, response) => {
  officialRaceModel.find(
    { isHighlighted: false },
    null,
    {
      sort: {
        date: -1,
      },
    },
    function (err, races) {
      if (err) {
        console.log(err);
        return;
      }
      response.json(races);
    }
  );
});

router.get("/", async (request, response) => {
  response.send("home");
});

module.exports = router;
