const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = Schema({
  _id: mongoose.Types.ObjectId,
  userName: {
    type: String,
    required: "You have to provide use name",
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: "You have to provide password",
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
