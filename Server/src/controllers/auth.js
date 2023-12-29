import Users from "../models/Users";
import { StatusCode } from "../util/Http";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function adminLogin(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email: email });
    if (!user) {
      return next(new HttpError("Wrong credentials", StatusCode.BadRequest));
    }
    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) {
      return next(new HttpError("Wrong credentials", StatusCode.BadRequest));
    }
    if (!user.isAdmin) {
      return next(new HttpError("user is not admin", StatusCode.BadRequest));
    }
    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      process.env.SECRETKEY
    );
    res.json({
      token: token,
    });
  } catch (e) {
    next(
      new HttpError(
        "unexpected problem occurred",
        StatusCode.InternalServerError
      )
    );
  }
}
