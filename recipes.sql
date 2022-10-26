-- psql -f recipes.sql


DROP DATABASE IF EXISTS myrecipesdatabase;
CREATE DATABASE myrecipesdatabase;
-- \c myrecipesdatabase;

DROP TABLE if EXISTS recipes;
DROP TABLE if EXISTS users;


CREATE TABLE users (
    id UUID PRIMARY KEY,
    username VARCHAR(200) UNIQUE NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR NOT NULL
    );

INSERT INTO users (id, username, email, password) VALUES ('35ed4f16-b415-4821-a85c-b6de74a3b9f7','Miriam-test', 'mdd.wit2022@startsteps.de', 'Mdd.wit2022@startsteps.de')

SELECT * FROM users 



CREATE TABLE recipes (
    id UUID PRIMARY KEY,
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
        FOREIGN KEY(userid)
        REFERENCES users(id)
    );

    INSERT INTO recipes (id, nameRecipe, mealType, mealOrigin, ingredients1, ingredients2, ingredients3, ingredients4, ingredients5, ingredients6, ingredients7, ingredients8, ingredients9, ingredients10, measurement1, measurement2, measurement3, measurement4, measurement5, measurement6, measurement7, measurement8, measurement9, measurement10, instruction, userid) VALUES (gen_random_uuid(), 'Fettuccine Alfredo', '', 'American', 'Fettucine', 'Heavy Cream', 'butter', 'Parmesan', 'Prsley', 'Black Pepper', '', '', '', '', '1lb', '1/2 cup', '1/2 cup', '1/2 cup', '2 tbsp', '', '', '', '', '', 'Cook pasta according to package instructions in a large pot of boiling water and salt.
Add heavy cream and butter to a large skillet over medium heat until the cream bubbles and the butter melts.
Whisk in parmesan and add seasoning (salt and black pepper).
Let the sauce thicken slightly and then add the pasta and toss until coated in sauce.
Garnish with parsley, and it is ready.', 'https://res.cloudinary.com/dajs1jldd/image/upload/v1666098966/z3mfx9mbuhcsglthucxm.jpg', '35ed4f16-b415-4821-a85c-b6de74a3b9f7');

SELECT * FROM recipes 