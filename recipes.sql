-- psql -f wardrobe.sql


DROP DATABASE IF EXISTS my-recipes-database;
CREATE DATABASE my-recipes-database;
\c wardrobedatabase;

DROP TABLE if EXISTS recipes;
DROP TABLE if EXISTS users;


CREATE TABLE users (
    id UUID PRIMARY KEY,
    username VARCHAR(200) UNIQUE NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR NOT NULL
    );



CREATE TABLE recipes (
    id UUID PRIMARY KEY,
    color VARCHAR(200) NOT NULL,
    price NUMERIC NOT NULL,
    currency VARCHAR(15) NOT NULL,
    size VARCHAR(15) NOT NULL,
    material VARCHAR(300) NOT NULL,
    url TEXT NOT NULL,
    name VARCHAR(300) NOT NULL,
    description TEXT NOT NULL,
    season VARCHAR(15) NOT NULL,
    userid UUID NOT NULL,
    CONSTRAINT fk_user
        FOREIGN KEY(userid)
        REFERENCES users(id)
    );

INSERT INTO wardrobe (id, color, price, currency, size, material, url, name, description, season, userid) VALUES (gen_random_uuid(), 'red with orange dotts', 25, 'euro', 'xl', 'cotton', 'https://res.cloudinary.com/dajs1jldd/image/upload/v1666098966/z3mfx9mbuhcsglthucxm.jpg', 'T-Shirt', 'A nice cotton T-Shirt', 'summer', '35ed4f16-b415-4821-a85c-b6de74a3b9f7');