import { check } from "express-validator";

export const validCreateEntry = [
    check("nameRecipe")
      .not()
      .isEmpty()
      .isAscii()
      .withMessage(
        "Please enter the name of the recipe. It could be a single string or a sentence"
      )
      .trim()
      .escape(),
  
    check("mealType")
      .isIn(["Beef",
      "Breakfast",
      "Chicken",
      "Dessert",
      "Miscellaneous",
      "Pork",
      "Seafood",
      "Side",
      "Starter",
      "Vegetarian",])
      .withMessage(
        "Please select one of the following options: 'Beef','Breakfast','Chicken','Dessert','Miscellaneous','Pork','Seafood','Side','Starter','Vegetarian'")
      .trim()
      .escape(),

      check("mealOrigin")
      .isIn(["American",
      "British",
      "Canadian",
      "Chinese",
      "Croatian",
      "Dutch",
      "French",
      "Indian",
      "Irish",
      "Italian",
      "Jamaican",
      "Malaysian",
      "Mexican",
      "Polish",
      "Russian",
      "Vietnamese",])
      .withMessage(
        "Please select one of the following options: 'British','Canadian','Chinese','Croatian','Dutch','French','Indian','Irish','Italian','Jamaican','Malaysian','Mexican','Polish','Russian','Vietnamese' ")
      .trim()
      .escape(),
  
    check("ingredients1")
    .not()
    .isEmpty()
    .isAscii()
    .withMessage(
      "Please enter an ingredient"
    )
    .trim()
    .escape(),

    check("ingredients2")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients3")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients4")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients5")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients6")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients7")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients8")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients9")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients10")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients11")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients12")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients13")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients14")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients15")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients16")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients17")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients18")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients19")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients20")
    .isAscii()
    .trim()
    .escape(),

    check("measurement1")
    .not()
    .isEmpty()
    .isAscii()
    .withMessage(
      "Please enter the quantity (e.g. 100g) for your ingredient"
    )
    .trim()
    .escape(),

    check("measurement2")
    .isAscii()
    .trim()
    .escape(),

    check("measurement3")
    .isAscii()
    .trim()
    .escape(),

    check("measurement4")
    .isAscii()
    .trim()
    .escape(),

    check("measurement5")
    .isAscii()
    .trim()
    .escape(),

    check("measurement6")
    .isAscii()
    .trim()
    .escape(),

    check("measurement7")
    .isAscii()
    .trim()
    .escape(),

    check("measurement8")
    .isAscii()
    .trim()
    .escape(),

    check("measurement9")
    .isAscii()
    .trim()
    .escape(),

    check("measurement10")
    .isAscii()
    .trim()
    .escape(),

    check("measurement11")
    .isAscii()
    .trim()
    .escape(),

    check("measurement12")
    .isAscii()
    .trim()
    .escape(),

    check("measurement13")
    .isAscii()
    .trim()
    .escape(),

    check("measurement14")
    .isAscii()
    .trim()
    .escape(),

    check("measurement15")
    .isAscii()
    .trim()
    .escape(),

    check("measurement16")
    .isAscii()
    .trim()
    .escape(),

    check("measurement17")
    .isAscii()
    .trim()
    .escape(),

    check("measurement18")
    .isAscii()
    .trim()
    .escape(),

    check("measurement19")
    .isAscii()
    .trim()
    .escape(),

    check("measurement20")
    .isAscii()
    .trim()
    .escape(),
  
  
    check("instruction")
      .not()
      .isEmpty()
      .isAscii()
      .withMessage(
        "Please enter a description of the recipes´s preparation. It should be a text"
      )
      .trim()
      .escape(),
  ];