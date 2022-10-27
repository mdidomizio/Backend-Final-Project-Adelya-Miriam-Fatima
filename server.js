import dotenv from "dotenv"
dotenv.config()
import express from "express";
import corsHeaders from "./middleware/cors.js";
import {
  createErrorMissingPath,
  errorMiddleware,
 } from "./middleware/errors.js";
// import wardrobeRouter from "./routes/wardrobe.js";
// import usersRouter from "./routes/users.js"

//create an instance of the server:
const app = express();
const port = process.env.PORT || 8000;

//middleware from express:
//tell the server to look for static files (images) in the folder public
app.use(express.static("public"));
//reading and sending data in the body(is the element that contains all the data fetched)
// for reading data, importing in
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// is used for deciding who can talk with the server and what can be done. It si always called before the router function
app.use(corsHeaders);

// request handler
// TODO app.use("/wardrobe", wardrobeRouter);
// TODO app.use("/users",usersRouter)

app.use("*", createErrorMissingPath);

//function that will send a response if there is an error
app.use(errorMiddleware);

//last lines:
app.listen(port, () => {
  console.log(`Server is listening to port:  ${port}.`);
});
