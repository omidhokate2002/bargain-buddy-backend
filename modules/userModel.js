import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requied: true,
    },
    email: {
      type: String,
      requied: true,
    },
    password: {
      type: String,
      requied: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

export default User;
