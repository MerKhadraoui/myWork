const express = require("express");
const router = express.Router();
const controller = require("../controllers/patientsController");
const PatientsData = require("../model/patientsModel");

router.get("/", (req, res) => {
  res
    .status(200)
    .render("registration", { title: " c'est pour vous registion  " });
});
router.route("/").post(controller.addPatient);
router.route("/:name").get(controller.getOnePatient);
module.exports = router;
