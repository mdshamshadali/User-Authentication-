const mongoose = require ("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Confirmpassword: {
    type: String,
    required: true,
  },
});

const RegisterModel = mongoose.model("SignUp", userSchema);

module.exports = RegisterModel;
