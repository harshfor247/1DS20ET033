const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  companyName: {
    type: String,
  },
  ownerName: {
    type: String,
  },
  rollNo: {
    type: Number,
  },
  onnerEmail: {
    type: String,
  },
  accessCode: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
