const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  trainName: {
    type: String,
    required: [true, "Please Enter Train Name"],
  },
  trainNumber: {
    type: Numbe,
  },
  departureTime: {
    hours: {
      type: Number,
    },
    Minutes: {
      type: Nubmer,
    },
    Seconds: {
      type: Number,
    },
  },
  seatAvailability: {
    sleeper: {
      type: Number,
    },
    AC: {
      type: Number,
    },
  },
  price: {
    sleeper: {
      type: Number,
    },
    AC: {
      type: Number,
    },
  },
});

module.exports = mongoose.model("Train", trainSchema);
