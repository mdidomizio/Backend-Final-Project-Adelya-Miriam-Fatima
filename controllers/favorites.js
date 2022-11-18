import { validationResult } from "express-validator";
import { db } from "../database/setup.js";
import { v4 as uuidv4 } from "uuid";

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

  let newUuid = uuidv4();

  // add a new id:
  await db.none(
    // ? Miriam, info about favorites db should be inserted here:
    "INSERT INTO favorites (id, color, price, currency, size, material, url, descrshort, descrlong, season) VALUES(${id}, ${color}, ${price}, ${currency}, ${size}, ${material}, ${url}, ${descrshort}, ${descrlong}, ${season})",
    { ...newItem, id: newUuid }
  );
  let updatedFavorites = await db.many("SELECT * FROM favorites");

  res.status(201).json({
    success: true,
    message: "Item was added",
    data: updatedFavorites,
  });
};
