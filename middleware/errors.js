export const createErrorMissingPath = (req, res, next) => {
    //create an error (error not for the frontend but for the back end):
    let pathError = new Error("there is no path here/ wrong url");
    pathError.status = 404;
    next(pathError);
    //throw pathError;
  };
  
  export const errorMiddleware = (error, req, res, next) => {
    //deal with error
    //1. console
    console.log("in our middleware for errors", error);
    //2. send response
    res.status(error.status || 500).send({
      serverError: {
        message: error.message || "Internal server error",
      },
    });
  };