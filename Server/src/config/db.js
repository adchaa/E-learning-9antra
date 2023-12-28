import mongoose from "mongoose";

try {
  await mongoose.connect(
    process.env.DB || "mongodb://127.0.0.1:27017/e-learning"
  );
  console.log("DB connected");
} catch (e) {
  console.log("DB problem");
}
