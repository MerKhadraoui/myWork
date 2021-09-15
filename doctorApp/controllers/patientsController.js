const express = require("express");
const controller = {};
const PatientsData = require("../model/patientsModel");
controller.getPatientList = async (req, res) => {
  try {
    const patients = await PatientsData.find();
    res
      .status(200)
      .render("patients", { title: " c'est la liste des malades" });
    // res.status(200).json({ patients });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};
controller.addPatient = async (req, res) => {
  const newPatient = new PatientsData({
    name: req.body.name,
    age: req.body.age,
    telephonNum: req.body.telephonNum,
    add: req.body.add,
  });
  try {
    await newPatient.save();
    res
      .status(201)
      .render("patientsList", { data: "this is the list of patients" });
    //json(newPatient);
    console.log(newPatient);
    //.render("patients", { data });
    //
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};
module.exports = controller;
