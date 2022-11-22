import { validationResult } from "express-validator";
import { db } from "../database/setup.js";

export const createFavoritesEntry = async (req, res) => {
  console.log(req);
  const validationErrors = validationResult(req);
  console.log(validationErrors);
  // if there are errors: send error back to client
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({
      errors: validationErrors.array(),
    });
  }

  let newItem = req.body;
  // check if the object is empty
  if (Object.keys(newItem).length === 0) {
    // build error functions
    throw new Error("Please enter some data");
    // throw createError(400, 'Please enter some data')
  }

  let statement =
    "INSERT INTO favoriterecipes (idMeal, strMeal, strCategory, strArea, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, userId)";
  statement +=
    "VALUES (${idMeal}, ${strMeal}, ${strCategory}, ${strArea}, ${strIngredient1}, ${strIngredient2}, ${strIngredient3}, ${strIngredient4}, ${strIngredient5}, ${strIngredient6}, ${strIngredient7}, ${strIngredient8}, ${strIngredient9}, ${strIngredient10}, ${strIngredient11}, ${strIngredient12}, ${strIngredient13}, ${strIngredient14}, ${strIngredient15}, ${strIngredient16}, ${strIngredient17}, ${strIngredient18}, ${strIngredient19}, ${strIngredient20}, ${strMeasure1}, ${strMeasure2}, ${strMeasure3}, ${strMeasure4}, ${strMeasure5}, ${strMeasure6}, ${strMeasure7}, ${strMeasure8}, ${strMeasure9}, ${strMeasure10}, ${strMeasure11}, ${strMeasure12}, ${strMeasure13}, ${userId})";

  // add a new id:
  await db.none(statement, { ...newItem });

  let updatedFavorites = await db.many("SELECT * FROM favoriterecipes");

  res.status(201).json({
    success: true,
    message: "Item was added",
    data: updatedFavorites,
  });
};

export const getFavorites = async (req, res) => {
  try {
    let dataFromDB = await db.many("SELECT * FROM favoriterecipes");
    res.status(200).json({
      message: "Data was found!",
      success: true,
      data: dataFromDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      errors: error.message,
    });
  }
};
