import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getCourseById,
  getCourses,
  updateCourse,
} from "../controllers/courses.js";
import { isAdmin } from "../middleware/auth.js";

const router = Router();

router.patch("/:id", isAdmin, updateCourse);
router.delete("/:id", isAdmin, deleteCourse);
router.post("/", isAdmin, createCourse);
router.get("/:id", getCourseById);
router.get("/", getCourses);

export default router;
