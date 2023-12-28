import "dotenv/config";
import "./config/db.js";
import express from "express";
import { HttpError } from "./util/Http.js";

import coursesRouter from "./routers/courses.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

//routers
app.use("/course", coursesRouter);

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
