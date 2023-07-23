const express = require("express");
const app = express();


app.use(express.json());


//routes imports
const train = require("./routes/trainRoute");
const user = require("./routes/userRoute");

app.use("/20.244.56.144", train);
app.use("/20.244.56.144", user);



module.exports = app;
