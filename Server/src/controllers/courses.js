import Course from "../models/Course.js";
import { HttpError, StatusCode } from "../util/Http.js";

export async function getCourseById(req, res, next) {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    if (!course) {
      return next(new HttpError("course not found", StatusCode.NotFound));
    }
    res.json(course);
  } catch (e) {
    next(
      new HttpError(
        "unexpected problem occurred",
        StatusCode.InternalServerError
      )
    );
  }
}

export async function getCourses(req, res, next) {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (e) {
    next(
      new HttpError(
        "unexpected problem occurred",
        StatusCode.InternalServerError
      )
    );
  }
}

export async function createCourse(req, res, next) {
  try {
    const { name, description, price } = req.body;
    const course = new Course({
      name: name,
      description: description,
      price: price,
    });
    await course.save();
    res.json(course);
  } catch (e) {
    next(
      new HttpError(
        "unexpected problem occurred",
        StatusCode.InternalServerError
      )
    );
  }
}

export async function updateCourse(req, res, next) {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const course = await Course.findByIdAndUpdate(id, {
      name: name,
      description: description,
      price: price,
    });
    if (!course) {
      return next(new HttpError("course not found", StatusCode.NotFound));
    }
    res.json({
      message: "updated successfully",
    });
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

export async function deleteCourse(req, res, next) {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const newCourse = new Course({
      name: name,
      description: description,
      price: price,
    });
    await Course.findByIdAndDelete(id, newCourse);
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
