const User = require("../models/userModel");

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { companyName, ownerName, accessCode } = req.body;

  const user = await User.create({
    companyName,
    ownerName,
    accessCode,
  });

  sendToken(user, 201, res);
});



