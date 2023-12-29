import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("course", schema);
