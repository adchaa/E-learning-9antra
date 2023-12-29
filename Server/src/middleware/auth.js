import { HttpError, StatusCode } from "../util/Http.js";
import jwt from "jsonwebtoken";
import Users from "../models/Users.js";

export async function isAdmin(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];
  if (!token)
    return next(new HttpError("Unauthorized", StatusCode.Unauthorized));
  jwt.verify(token, process.env.SECRETKEY, async (err, payload) => {
    if (err)
      return next(new HttpError("Unauthorized", StatusCode.Unauthorized));
    const data = await Users.findById(payload._id);
    if (data.isAdmin) {
      next();
    } else {
      return next(new HttpError("Unauthorized", StatusCode.Unauthorized));
    }
  });
}
