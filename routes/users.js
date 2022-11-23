import { Router } from "express";
import { postCreateUserEntry, loginUser } from "../controllers/users.js";
import { validUser } from "../validation/users.js";
const router = Router();

router.route("/").post(validUser, postCreateUserEntry);
router.route("/login").post(loginUser);

export default router;
