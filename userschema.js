const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userschema = new schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("users", userschema);
