import Users from "../models/Users.js";
import { HttpError, StatusCode } from "../util/Http.js";

export async function getUserById(req, res, next) {
  try {
    const { id } = req.params;
    const users = await Users.findById(id);
    if (!users) {
      return next(new HttpError("user not found", StatusCode.NotFound));
    }
    res.json(users);
  } catch (e) {
    next(
      new HttpError(
        "unexpected problem occurred",
        StatusCode.InternalServerError
      )
    );
  }
}

export async function getUsers(req, res, next) {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (e) {
    next(
      new HttpError(
        "unexpected problem occurred",
        StatusCode.InternalServerError
      )
    );
  }
}

export async function createUser(req, res, next) {
  try {
    const { name, lastName, email, password, phone, isAdmin } = req.body;
    const user = new Users({
      name: name,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      isAdmin: isAdmin,
    });
    await user.save();
    // I shouldn't send password to the user
    res.json(user);
  } catch (e) {
    console.log(e);
    next(
      new HttpError(
        "unexpected problem occurred",
        StatusCode.InternalServerError
      )
    );
  }
}

export async function updateUser(req, res, next) {
  try {
    const { id } = req.params;
    const { name, lastName, email, password, phone, isAdmin } = req.body;
    const user = await Users.findByIdAndUpdate(id, {
      name: name,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      isAdmin: isAdmin,
    });
    if (!user) {
      return next(new HttpError("user not found", StatusCode.NotFound));
    }
    res.json({
      message: "updated successfully",
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

export async function deleteUser(req, res, next) {
  try {
    const { id } = req.params;
    const user = await Users.findByIdAndDelete(id);
    if (!user) {
      return next(new HttpError("user not found", StatusCode.NotFound));
    }
    res.json({
      message: "deleted successfully",
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
