require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const museumRoute = require("./routes/MuseumMitologiRoute");

app.use(cors());
app.use(express.json());

app.use("/api/mitos", mitosRoutes);

app.get("/", (req, res) => {
  res.send("Museum Mitologi API is running 🚀");
});

module.exports = app;
