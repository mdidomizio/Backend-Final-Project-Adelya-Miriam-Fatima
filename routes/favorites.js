import { Router } from "express";

import loggedInToken from "../middleware/auth.js";
import { createFavoritesEntry } from "../controllers/favorites.js";
import { getFavorites } from "../controllers/favorites.js";

const router = Router();

router
  .route("/")
  .post(loggedInToken, createFavoritesEntry)
  .get(loggedInToken, getFavorites);

// router
//   .route("/:id")
//   .get(loggedInToken, validPathGetWardrobeEntry, getOneItem)
//   .put(loggedInToken, validUpdateEntry, updateWardrobeEntry);

export default router;
