import jwt from 'jsonwebtoken'

const loggedInToken = (req, res, next) => {
    try {
      console.log('in headers', req.headers);
      // get the token from header
      const token = req.headers.authorization.split(' ')[1]
      // decode the token
      // move the secret to .env file
      const decodedToken = jwt.verify(token, 'A secret')
      // add the decoded token to req
      req.tokenFromClient = decodedToken
      next()
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        success: false,
        errors: 'Could not log in'
      })
    }
  }
  
  export default loggedInToken