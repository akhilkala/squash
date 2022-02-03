import { NextFunction, Request, Response } from "express";
import { HTTPError, HttpStatusCode } from "../utils/utilities";

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    // const user = verifyToken(token);
    // req.user = user;

    next();
  } catch (err) {
    throw new HTTPError(HttpStatusCode.UNAUTHORIZED, "Auth failed");
  }
};
