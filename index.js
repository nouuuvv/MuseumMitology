const express = require("express");
const cors = require("cors");
const app = express();
const museumRoute = require("./routes/MuseumMitologiRoute"); // sesuaikan

app.use(cors());
app.use(express.json());

app.use("/api/mitologi", museumRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
