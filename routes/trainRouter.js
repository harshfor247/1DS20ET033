const express = require("express");
const { getTrain, trainDetails } = require("../controllers/trainController");

const router = express.Router();

router;
router.route("/train/trains").get(getTrain);

router.route("/train/trainDetails").get(trainDetails);

module.exports = router;
