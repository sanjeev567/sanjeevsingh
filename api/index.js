const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const adsRoute = require("./routes/ads");
const companyRoute = require("./routes/company");
// make a new app
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// Establish connection to MongoDB
mongoose
  .connect("mongodb://localhost/my_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(`MongoDB Connection Error: ${err}`));

//routes
app.use("/ads", adsRoute);
app.use("/company", companyRoute);

// server listen
app.listen(8800, () => {
  console.log("Backend is running...");
});
