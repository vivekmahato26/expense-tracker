const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  console.log(authHeader)
  const token = authHeader.split(" ")[1];
  if (!token || token === ""||token =="null") {
    req.isAuth = false;
    return next();
  }
  let decodedToken;
  try {
    console.log(token)
    decodedToken = (JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()));
    if (decodedToken.email) {
      req.isAuth = true;
      req.userId = decodedToken.userId;
      req.email = decodedToken.email;
      req.access = decodedToken.access;
    } else {
      req.isAuth = false;
      return next();
    }
  } catch (err) {
    console.log(err.message);
    req.isAuth = false;

    return next();
  }
  return next();
};
