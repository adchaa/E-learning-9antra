import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getCourseById,
  getCourses,
  updateCourse,
} from "../controllers/courses.js";

const router = Router();

router.patch("/:id", updateCourse);
router.delete("/:id", deleteCourse);
router.post("/", createCourse);
router.get("/:id", getCourseById);
router.get("/", getCourses);

export default router;
