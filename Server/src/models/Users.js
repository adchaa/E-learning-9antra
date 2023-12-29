import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: String,
    isAdmin: String,
  },
  { timestamps: true }
);

export default mongoose.model("users", schema);
