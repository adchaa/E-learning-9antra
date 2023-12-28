import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: String,
    lastName: String,
    email: String,
    password: String,
    phone: String,
    isAdmin: String,
  },
  { timestamps: true }
);

export default mongoose.model("users", schema);
