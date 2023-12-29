import "dotenv/config";
import "./config/db.js";
import express from "express";
import multer from "multer";
import cors from "cors";
import fs from "fs";
import path from "path";
import { HttpError } from "./util/Http.js";

import coursesRouter from "./routers/courses.js";
import usersRouter from "./routers/users.js";
import { adminLogin } from "./controllers/auth.js";
import Courses from "./models/Courses.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.post("/login", adminLogin);

//routers
app.use("/course", coursesRouter);
app.use("/user", usersRouter);

const imageUploadPath = "./storage/";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imageUploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

const imageUpload = multer({ storage: storage });

app.post("/image/:id", imageUpload.single("image"), async (req, res, next) => {
  const imageUrl = req.file.filename;
  const course = await Courses.findById(req.params.id);
  course.imageUrl = imageUrl;
  course.save();
  res.send("POST request recieved on server to /image-upload.");
});

app.get("/image/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(imageUploadPath, filename);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    res.setHeader("Content-Type", "image/*");
    res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    res.status(404).send("File not found");
  }
});

//page not found error 404
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

//error handler
app.use((error, req, res, next) => {
  if (!error) {
    return;
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "an unknown error occurred!" });
});

app.listen(PORT, () => console.log("server started at port " + PORT));
