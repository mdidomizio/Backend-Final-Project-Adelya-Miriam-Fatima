import pgPromise from "pg-promise";

let connection = {
  host: "localhost",
  port: 5432,
  database: "myrecipesdatabase",
  user: process.env.DB_USERNAME,
  password: process.env.DB_PW,
};

const pgp = pgPromise({
  connect(client) {
    console.log("Connected to database", client.connectionParameters);
  },
});

export const db = pgp(connection);
