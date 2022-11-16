import { Router } from "express";
import { validUser } from "../validation/users.js";
import { postCreateUserEntry, loginUser } from "../controllers/users.js";

const router = Router();

router.route("/").post(validUser, postCreateUserEntry);

router.route("/login").post(loginUser);

export default router;
