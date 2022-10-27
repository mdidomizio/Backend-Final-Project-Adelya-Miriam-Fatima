import { check } from "express-validator";

export const validUser = [
  check("username")
    .not()
    .isEmpty()
    .withMessage("field cannot be empty")
    .isAscii()
    .withMessage(
      "Please enter your username. It should be a string or sentence"
    )
    .trim()
    .escape(),
  check("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Please enter a email")
    .trim()
    .escape(),
  check("password")
    .isStrongPassword()
    .withMessage("Use a strong password")
    .trim()
    .escape(),
];
