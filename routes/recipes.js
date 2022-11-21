import { Router } from "express";
import {
  deleteRecipeData,
  getRecipes,
  putUpdateRecipeData,
  postCreateRecipeData,
  getRecipeById
} from "../controllers/recipes.js";
import { validCreateEntry, validUpdateEntry, validPathGetWardrobeEntry } from "../validation/recipes.js";
import loggedInToken from '../middleware/auth.js'

const router = Router();
// /wardrobe/ get post
// /wardrobe/:id put delete

// need validation on post and put
router
  .route("/")
  .get(loggedInToken, getRecipes)
  .post(loggedInToken, validCreateEntry, postCreateRecipeData);

router
  .route("/:id")
  .put(loggedInToken, validUpdateEntry, putUpdateRecipeData)
  .delete(loggedInToken, validPathGetWardrobeEntry, deleteRecipeData)
  .get(validPathGetWardrobeEntry, getRecipeById);

export default router;