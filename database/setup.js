import pgPromise from "pg-promise";

let connection = {
    host: "localhost",
    port: 5432,
    database: "myrecipesdatabase",
    user: "miriamdidomizio",
    password: process.env.DB_PW
}



// connect to database show on console.log:
const pgp = pgPromise({connect(client) {
    const cp = client.connectionParameters;
    console.log("connected to database", cp.database)

}})
//database to interact with in controllers
export const db = pgp(connection)