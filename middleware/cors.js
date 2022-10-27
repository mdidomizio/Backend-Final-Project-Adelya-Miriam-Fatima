const corsHeaders = (req, res, next) => {
    console.log("from cors header");
    //who can send request? access control allow origin
    //what can be requested? everything "*" is this way because we are still local it will be changed before deploying
    // - check the domain
    // - check the port
    // -check the protocol http
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, x-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT, DELETE");
    next();
  };
  
  export default corsHeaders;