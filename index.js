const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
////
const userRoute = require("./routes/user");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successfull;"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("backend running");
});