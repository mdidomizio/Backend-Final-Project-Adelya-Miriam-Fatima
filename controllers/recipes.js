import { validationResult } from "express-validator";
import { v4 as uuidv4 } from "uuid";
import { db } from "../database/setup.js";

export const getRecipes = async (req, res) => {
  let userId = req.tokenFromClient.id;
  try {
    // use the connection
    // get all the recipes data from db
    let dataFromDB = await db.manyOrNone(
      "SELECT * FROM recipes WHERE userid = $1",
      userId
    );
    console.log("data from DB", dataFromDB);

    //sent the data in response

    res.status(200).json({
      message: "Data was found!",
      success: true,
      data: dataFromDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getRecipeById = async (req, res) => {
  // add a validation for ID, is a UUID?
  const validationErrors = validationResult(req);
  //if there are errors: send back error to client
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({
      errors: validationErrors.array(),
    });
  }
  let userId = req.tokenFromClient.id;
  try {
    // use the connection
    // get all the wardrobe data from db

    let id = req.params.id;
    // console.log(id)

    let recipeByIdFromDB = await db.one(
      "SELECT * FROM recipes WHERE id = $1 AND userid = $2",
      id,
      userId
    );

    res.status(200).json({
      message: "Recipe was found!",
      success: true,
      data: recipeByIdFromDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//add 3 functions post (create), put(update), delete
export const postCreateRecipeData = async (req, res) => {
  const validationErrors = validationResult(req);
  //if there are errors: send error back to client
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({
      errors: validationErrors.array(),
    });
  }

  let newRecipe = req.body;
  // create a new UUID
  let newId = uuidv4();
  console.log("id", newId);
  console.log(req.tokenFromClient);
  // get id from token and add to insert!
  let userId = req.tokenFromClient.id;

  try {
    let newRecipeInDB = await db.one(
      'INSERT INTO recipes VALUES(${id}, ${nameRecipe}, ${mealType}, ${mealOrigin}, ${ingredients1}, ${ingredients2}, ${ingredients3}, ${ingredients4}, ${ingredients5}, ${measurement1}, ${measurement2}, ${measurement3}, ${measurement4}, ${measurement5}, ${instruction}, ${url}, ${userid}) RETURNING *',
      { ...newRecipe, id: newId, userid: userId }
    );

    res.status(201).json({
      success: true,
      message: `${newRecipeInDB.name} was updated`,
      body: newRecipeInDB,
      // alert("Recipes has been created")
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      errors: error.message,
    });
  }
};

export const putUpdateRecipeData = async (req, res) => {
  try {
    console.log(req.body.id, req.params.id);
    if (req.body.id !== req.params.id) {
      throw new Error("the id does not match the url id");
    }
    const validationErrors = validationResult(req);
    //if there are errors: send error back to client
    if (!validationErrors.isEmpty()) {
      console.log(validationErrors.array());
      return res.status(400).json({
        errors: validationErrors.array(),
      });
    }
    
    // change to update! Here we use the id from the body to find the item to update
    let idInDB = await db.one(
        'UPDATE recipes SET nameRecipe= ${nameRecipe}, mealType= ${mealType}, url= ${url}, mealOrigin= ${mealOrigin}, ingredients1 = ${ingredients1}, ingredients2= ${ingredients2},ingredients3 =${ingredients3}, ingredients4= ${ingredients4}, ingredients5=${ingredients5}, ingredients6=${ingredients6}, ingredients7=${ingredients7}, ingredients8=${ingredients8}, ingredients9=${ingredients9}, ingredients10=${ingredients10},ingredients11 = ${ingredients11}, ingredients12= ${ingredients12},ingredients13 =${ingredients13}, ingredients14= ${ingredients14}, ingredients15=${ingredients15}, ingredients16=${ingredients16}, ingredients17=${ingredients17}, ingredients18=${ingredients18}, ingredients19=${ingredients19}, ingredients20=${ingredients20}, measurement1=${measurement1}, measurement2=${measurement2}, measurement3=${measurement3}, measurement4=${measurement4}, measurement5=${measurement5}, measurement6=${measurement6}, measurement7=${measurement7}, measurement8=${measurement8}, measurement9=${measurement9}, measurement10=${measurement10}, measurement11=${measurement11}, measurement12=${measurement12}, measurement13=${measurement13}, measurement14=${measurement14}, measurement15=${measurement15}, measurement16=${measurement16}, measurement17=${measurement17}, measurement18=${measurement18}, measurement19=${measurement19}, measurement20=${measurement20}, instruction=${instruction} WHERE id = ${id} RETURNING *',
        req.body
    );

    res.status(201).json({
      success: true,
      message: `${idInDB.nameRecipe} was updated`,
      body: idInDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      errors: error.message,
    });
  }
};


export const deleteRecipeData = async (req, res) => {
  console.log("in delete");
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.status(400), json({ errors: validationErrors.array() });
  }
  try {
    let id = req.params.id;
    console.log("clg url", req.params.id);
    
    let deleteRecipeFromDBbyId = await db.result(
      "DELETE FROM recipes WHERE id = $1",
      id,
      (result) => result.rowCount
    );
    

    console.log("deleted", deleteRecipeFromDBbyId);
    res.status(204).json({
      success: true,
      message: `Recipe is deleted`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
