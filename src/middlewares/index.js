var jwt = require("jsonwebtoken");

async function userAuthenticateMiddleWare(req, res, next) {
  let { authorization } = req.headers;
  let tempArray = [];
  let tokenFormClient;
  if (authorization) {
    tempArray = req.headers.authorization.split(" ");
    tokenFormClient = tempArray[1];
    try {
      var decoded = jwt.verify(tokenFormClient, "mykey");
      next();
    } catch (error) {
      res.send("Unauthentication").status(401);
    }
  } else {
    res.send("Unauthentication").status(401);
  }
}

module.exports = {
  userAuthenticateMiddleWare,
};
