import express from "express";
import { login, register, verify } from "../controllers/user";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/verify/:token", verify);

export default router;
