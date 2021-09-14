const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const userControllers = {};
//GET
userControllers.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//POST
userControllers.addNewUser = async (req, res) => {
  const userCheck = await User.findOne({ userName: req.body.userName });
  if (userCheck) {
    return res.status(400).send("This user is alredy been used");
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    const newUser = await new User({
      _id: mongoose.Types.ObjectId(),
      userName: req.body.userName,
      password: hashedPassword,
    });
    newUser.save();
    res.status(201).json({ message: "new user been added  " + newUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//POST
userControllers.login = async (req, res) => {
  const user = await User.findOne({ userName: req.body.userName });
  if (user === null) {
    return res.status(404).send("User not found");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("cool ");
    } else {
      res.send("not Allowed");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = userControllers;
