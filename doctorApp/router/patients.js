// Express setup
const express = require("express");
const router = express.Router();
const PatientsData = require("../model/patientsModel");
const controller = require("../controllers/patientsController");
router.route("/").get(controller.getPatientList);
router.route("/:name").get(controller.getOnePatient);
module.exports = router;
