const Train = require("../models/trainModels");

exports.createTrain = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;

  const train = await Train.create(req.body);

  res.status(201).json({
    success: true,
    train,
  });
});

exports.getTrain = catchAsyncErrors(async (req, res, next) => {
  const trainCount = await Train.countDocuments();

  res.status(201).json({
    success: true,
    train,
    trainCount,
  });
});

exports.trainDetails = catchAsyncErrors(async (req, res, next) => {
  const train = await Train.findById(req.params.id);

  res.status(200).json({
    success: true,
    train,
  });
});
