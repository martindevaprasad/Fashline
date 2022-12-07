const express = require("express");
const { default: mongoose } = require("mongoose");

const router = require("./routes/Western-routes");

const cors = require("cors");
const userrouter = require("./routes/User-routes");

const app = express();

//middleware
app.use(express.json());
app.use("/api", userrouter);
//body-parser
app.use(cors());
app.use("/westernwears", router);

mongoose
  .connect(
    "mongodb+srv://Admin:2nvKOG6jvmdmcDcX@cluster0.49wk2uc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("db connected"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

//2nvKOG6jvmdmcDcX
