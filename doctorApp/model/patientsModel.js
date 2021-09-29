// require your DB
const mongoose = require("mongoose");
// create blue print for yout data base objects
const patientsDataSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  telephonNum: {
    type: String,
  },
  add: String,
  problemes: { type: String, require: true },
  doctorCons: [doctorSchema],
});
const doctorSchema = new mongoose.Schema({
  consultation: String,
});
//// exporting your file

module.exports = mongoose.model("patientsData", patientsDataSchema); // create new collection mongoose.model(colectionName, your schema)

// module.exports = mongoose.model("EmployeesData",employeesDataSchema, "EmployeesData");// work on old collection that we have
