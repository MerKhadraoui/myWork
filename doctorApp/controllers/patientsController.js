const express = require("express");
const controller = {};
const PatientsData = require("../model/patientsModel");
controller.getPatientList = async (req, res) => {
  try {
    const patients = await PatientsData.find();
    res.status(200).render("patientsList", {
      title: "la liste des malades",
      patients: patients,
    });
    console.log(patients);
    // res.status(200).json({ patients });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

controller.addPatient = async (req, res) => {
  console.log("this is req :", req.body.name);
  const newPatient = new PatientsData({
    name: req.body.name,
    age: req.body.age,
    telephonNum: req.body.telephonNum,
    add: req.body.add,
    problemes: req.body.problemes,
  });

  try {
    await newPatient.save();
    res.render("patientDetails", { patient: newPatient });
    //res.status(201).json("New Patient been added");

    console.log(newPatient);
    //.render("patients", { data });
    //
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};
controller.getOnePatient = async (req, res) => {
  const patient = await PatientsData.findOne({ name: req.params.name });
  console.log(patient);
  try {
    res.render("patientDetails", { patient });

    // res.status(200).json({ patient });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};
module.exports = controller;
