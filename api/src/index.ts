import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import connectDB from "./utils/db";
import { errorHandler, HTTPError, HttpStatusCode } from "./utils/utilities";
import authRoutes from "./routes/auth";
import mailer from "./utils/mailer";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
connectDB();

app.get("/", async (req, res) => {
  try {
    await mailer();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

app.use("/auth", authRoutes);

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  throw new HTTPError(HttpStatusCode.NOT_FOUND, "Resource not found");
});
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}...`)
);
