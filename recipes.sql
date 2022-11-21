-- psql -f recipes.sql

DROP DATABASE IF EXISTS myrecipesdatabase;


CREATE DATABASE myrecipesdatabase;

-- \c myrecipesdatabase;

DROP TABLE if EXISTS recipes;


DROP TABLE if EXISTS users;


CREATE TABLE users (id UUID PRIMARY KEY,
                                    username VARCHAR(200) UNIQUE NOT NULL,
                                                                 email VARCHAR(50) NOT NULL,
                                                                                   password VARCHAR NOT NULL);


INSERT INTO users (id,
                   username,
                   email,
                   password)
VALUES ('35ed4f16-b415-4821-a85c-b6de74a3b9f7',
        'Miriam-test',
        'mdd.wit2022@startsteps.de',
        'Mdd.wit2022@startsteps.de')
SELECT *
FROM users
CREATE TABLE recipes (id UUID PRIMARY KEY,
                nameRecipe VARCHAR(200) NOT NULL,
                                 mealType VARCHAR(200) NOT NULL,
                                                                                    mealOrigin VARCHAR(200) NOT NULL,
                                                                                                            ingredients1 VARCHAR(200) NOT NULL,
                                                                                                                                      ingredients2 VARCHAR(200) NOT NULL,
                                                                                                                                                                ingredients3 VARCHAR(200) NOT NULL,
                                                                                                                                                                                          ingredients4 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                    ingredients5 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                              ingredients6 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                        ingredients7 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                                                  ingredients8 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                                                                            ingredients9 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                                                                                                      ingredients10 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                 measurement1 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                           measurement2 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                     measurement3 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                               measurement4 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         measurement5 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   measurement6 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             measurement7 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       measurement8 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 measurement9 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           measurement10 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      instruction TEXT NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       url TEXT NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                userid UUID NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            CONSTRAINT fk_user
                      FOREIGN KEY(userid) REFERENCES users(id));


INSERT INTO recipes (id, nameRecipe, mealType, mealOrigin, ingredients1, ingredients2, ingredients3, ingredients4, ingredients5, ingredients6, ingredients7, ingredients8, ingredients9, ingredients10, measurement1, measurement2, measurement3, measurement4, measurement5, measurement6, measurement7, measurement8, measurement9, measurement10, instruction, url, userid)
VALUES (gen_random_uuid(),
        'Fettuccine Alfredo',
        '',
        'American',
        'Fettucine',
        'Heavy Cream',
        'butter',
        'Parmesan',
        'Parsley',
        'Black Pepper',
        '',
        '',
        '',
        '',
        '1lb',
        '1/2 cup',
        '1/2 cup',
        '1/2 cup',
        '2 tbsp',
        '',
        '',
        '',
        '',
        '',
        'Cook pasta according to package instructions in a large pot of boiling water and salt.Add heavy cream
and butter to a large skillet over medium heat until the cream bubbles
and the butter melts. Whisk in parmesan
and add seasoning (salt
                   and black pepper). Let the sauce thicken slightly
and then add the pasta
and toss until coated in sauce. Garnish with parsley,
and it is ready.',
        'https://res.cloudinary.com/dajs1jldd/image/upload/v1666098966/z3mfx9mbuhcsglthucxm.jpg',
        '35ed4f16-b415-4821-a85c-b6de74a3b9f7');


SELECT *
FROM recipes

CREATE TABLE favoriterecipes ( idMeal VARCHAR(20) NOT NULL,
                                                  strMeal VARCHAR(200) NOT NULL,
                                                                       strCategory VARCHAR(200) NOT NULL,
                                                                                                strArea VARCHAR(200) NOT NULL,
                                                                                                                     strIngredient1 VARCHAR(200) NOT NULL,
                                                                                                                                                 strIngredient2 VARCHAR(200),
                                                                                                                                                                strIngredient3 VARCHAR(200),
                                                                                                                                                                               strIngredient4 VARCHAR(200),
                                                                                                                                                                                              strIngredient5 VARCHAR(200),
                                                                                                                                                                                                             strIngredient6 VARCHAR(200),
                                                                                                                                                                                                                            strIngredient7 VARCHAR(200),
                                                                                                                                                                                                                                           strIngredient8 VARCHAR(200),
                                                                                                                                                                                                                                                          strIngredient9 VARCHAR(200),
                                                                                                                                                                                                                                                                         strIngredient10 VARCHAR(200),
                                                                                                                                                                                                                                                                                         strIngredient11 VARCHAR(200),
                                                                                                                                                                                                                                                                                                         strIngredient12 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                         strIngredient13 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                         strIngredient14 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                         strIngredient15 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                         strIngredient16 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                         strIngredient17 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                         strIngredient18 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                         strIngredient19 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                         strIngredient20 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                         strMeasure1 VARCHAR(200) NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  strMeasure2 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              strMeasure3 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          strMeasure4 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      strMeasure5 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  strMeasure6 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              strMeasure7 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          strMeasure8 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      strMeasure9 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  strMeasure10 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               strMeasure11 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            strMeasure12 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         strMeasure13 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      strMeasure14 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   strMeasure15 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                strMeasure16 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             strMeasure17 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          strMeasure18 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       strMeasure19 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    strMeasure20 VARCHAR(200),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 strInstructions TEXT NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      strMealThumb TEXT NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        userid UUID NOT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    CONSTRAINT fk_user
                              FOREIGN KEY(userid) REFERENCES users(id) );

INSERT INTO favoriterecipes (idMeal,
strMeal,
strCategory,
strArea,
strIngredient1,
strIngredient2,
strIngredient3,
strIngredient4,
strIngredient5,
strIngredient6,
strIngredient7,
strIngredient8,
strIngredient9,
strIngredient10,
strIngredient11,
strIngredient12,
strIngredient13,
strIngredient14,
strIngredient15,
strIngredient16,
strIngredient17,
strIngredient18,
strIngredient19,
strIngredient20,
strMeasure1,
strMeasure2,
strMeasure3,
strMeasure4,
strMeasure5,
strMeasure6,
strMeasure7,
strMeasure8,
strMeasure9,
strMeasure10,
strMeasure11,
strMeasure12,
strMeasure13,
strMeasure14,
strMeasure15,
strMeasure16,
strMeasure17,
strMeasure18,
strMeasure19,
strMeasure20,
strInstructions,
strMealThumb,
userid)
VALUES (
'52783',
'Rigatoni with fennel sausage sauce',
'Lamb',
'Moroccan',
'olive oil',
'Italian fennel sausages',
'onion',
'fennel bulb',
'smoky paprika',
'garlic',
'fennel seeds',
'red wine',
'chopped tomatoes',
'caster sugar',
'pitted black olives',
'rigatoni',
'pecorino',
'anchovy fillet',
'garlic',
'olive oil',
'basil leaves',
'',
'',
'',
'2½ tbsp',
'6 cut into 1.5cm-thick slices',
'1 large peeled and chopped',
'1 trimmed and roughly chopped; reserve any fronds to garnish',
'½ tsp',
'1 clove, peeled and sliced',
'2 tsp lightly toasted and then gently crushed',
'100ml',
'400g tinned',
'½ tsp',
'50g cut in half lengthways',
'500g',
'30g roughly crumbled into 0.5cm pieces',
'1  rinsed and patted dry',
'1 clove, peeled and crushed',
'60ml',
'50g torn',
'',
'',
'',
'Heat a tablespoon of oil in a large saute pan
for which you have a lid. Add the sausage pieces
and fry on a medium-high heat
for 10 minutes,
    stirring regularly,
    until golden-brown all over. Transfer the sausages to a plate,
                                                          then add the onion
and fennel to the hot pan
and fry
for 15 minutes,
    stirring once in a while,
                       until soft
and caramelised;

if the pan goes a bit dry,
                      add a teaspoon
or so of extra oil. Stir in the paprika,
                            garlic
and half the fennel seeds,
             fry
for two minutes
more,
                then pour on the wine
and boil
for 30 seconds,
    to reduce by half. Add the tomatoes,
                           sugar,
                           100ml water,
                                 the seared sausage
and half a teaspoon of salt,
                       cover
and simmer
for 30 minutes;

remove the lid after 10 minutes,
and cook until the sauce is thick
and rich. Remove
from the heat,
     stir through the olives
and remaining fennel seeds
and
set aside until you’re ready to serve.\r\n\r\nBring a large pot of salted water to a boil,
                                                                                   add the pasta
and cook
for 12-14 minutes (
                   or according to the instructions on the packet),
          until al dente. Meanwhile,
                reheat the sauce. Drain the pasta,
                                            return it to the pot,
                                                         stir in a tablespoon of oil,
                                                                                 then divide between the bowls. \r\n\r\nPut all the pesto ingredients
except the basil in the small bowl of a food processor. Add a tablespoon of water
and blitz to a rough paste. Add the basil,
                                then blitz until just combined (the pesto has a much better texture if the basil is not overblended).\r\n\r\nSpoon over the ragù
and top with a spoonful of pesto. Finish with a sprinkling of chopped fennel fronds,
                                                                             if you have any,
and serve at once.',
'https://www.themealdb.com/images/media/meals/qtqvys1468573168.jpg',
'4d49163c-0e89-40c9-b067-ff491419d972'
)


SELECT *
FROM favoriterecipes;