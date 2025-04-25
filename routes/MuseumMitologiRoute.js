const express = require("express");
const MuseumMitologiController = require("../controllers/MuseumMitologiController");

const router = express.Router();

// Route to get all Mitologi
router.get("/", MuseumMitologiController.getAllMitologi);

// Route to get a single Mitologi by ID
router.get("/:id", MuseumMitologiController.getMitologiById);

// Route to create a new Mitologi
router.post("/", MuseumMitologiController.createMitologi);

// Route to update an existing Mitologi by ID
router.put("/:id", MuseumMitologiController.updateMitologi);

// Route to delete a Mitologi by ID
router.delete("/:id", MuseumMitologiController.deleteMitologi);

module.exports = router;
