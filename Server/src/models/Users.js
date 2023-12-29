import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const schema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: String,
    isAdmin: Boolean,
  },
  { timestamps: true }
);

schema.methods = {
  createAccessToken: async function () {
    try {
      const user = this;
      const token = jwt.sign(
        {
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        process.env.SECRETKEY,
        {
          expiresIn: process.env.TOKEN_LIFE || "15m",
        }
      );
      return token;
    } catch (error) {
      console.error(error);
    }
  },
};

schema.pre("save", async function (next) {
  try {
    // Hash the password whenever it's modified or user is getting created
    if (this.isModified("password")) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
    }
  } catch (error) {
    next(error);
  }
  next();
});

export default mongoose.model("users", schema);
