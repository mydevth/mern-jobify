import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide name"],
    minlength: 3,
    max: 20,
    trim: true,
  },
  lastName: { type: String, maxLength: 20, trim: true, default: "lastName" },
  email: {
    type: String,
    require: [true, "Please provide email"],
    validate:{
      validator: validator.isEmail,
      message:'Please provide a valid email'
    },
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please provide password"],
    minlength: 6,
  },
  location: { type: String, trim: true, maxLength: 20, default: "my city" },
});

export default mongoose.model("User", UserSchema);
