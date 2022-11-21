import { Router } from "express";

import loggedInToken from "../middleware/auth.js";
import { createFavoritesEntry } from "../controllers/favorites.js";

const router = Router();

router
  .route("/")
  //   .get(getWardrobeData)
  .post(loggedInToken, createFavoritesEntry);

// router
//   .route("/:id")
//   .get(loggedInToken, validPathGetWardrobeEntry, getOneItem)
//   .put(loggedInToken, validUpdateEntry, updateWardrobeEntry);

export default router;
