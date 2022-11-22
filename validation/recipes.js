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
    .optional()
    .trim()
    .escape(),

    check("ingredients3")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients4")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients5")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients6")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients7")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients8")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients9")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients10")
    .isAscii()
    .trim()
    .escape(),

    check("ingredients11")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients12")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients13")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients14")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients15")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients16")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients17")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients18")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients19")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("ingredients20")
    .optional()
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
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement3")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement4")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement5")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement6")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement7")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement8")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement9")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement10")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement11")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement12")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement13")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement14")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement15")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement16")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement17")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement18")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement19")
    .optional()
    .isAscii()
    .trim()
    .escape(),

    check("measurement20")
    .optional()
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

  export const validUpdateEntry = [...validCreateEntry,
    check('id')
      .custom((value, { req }) => {
        // we can add a custom check for the value of the id here or in the controller
        if (value !== req.params.id) {
          throw new Error('mismatch')
        } else {
          return value
        }
      })]

      export const validPathGetRecipeEntry = [
        check("id").trim().isUUID()
      ]