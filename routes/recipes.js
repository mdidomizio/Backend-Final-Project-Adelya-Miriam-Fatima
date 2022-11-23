import { Router } from "express";
import {
  deleteRecipeData,
  getRecipes,
  putUpdateRecipeData,
  postCreateRecipeData,
  getRecipeById
} from "../controllers/recipes.js";
import { validCreateEntry, validUpdateEntry, validPathGetRecipeEntry } from "../validation/recipes.js";
import loggedInToken from '../middleware/auth.js'

const router = Router();

// need validation on post and put
router
  .route("/")
  .get(loggedInToken, getRecipes)
  .post(loggedInToken, validCreateEntry, postCreateRecipeData);

router
  .route("/:id")
  .put(loggedInToken, validUpdateEntry, putUpdateRecipeData)
  .delete(loggedInToken, validPathGetRecipeEntry, deleteRecipeData)
  .get(validPathGetRecipeEntry, getRecipeById);

export default router;