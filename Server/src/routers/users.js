import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/users.js";
import { isAdmin } from "../middleware/auth.js";

const router = Router();

/* right now there is no normal user 
so that why only the admin can mange the users of the website */
//router.use(isAdmin);

router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/", createUser);
router.get("/:id", getUserById);
router.get("/", getUsers);

export default router;
