import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    //   Get token from header
    const token = req.header("authorization").split(" ")[1];
    const decryptedToken = jwt.verify(token, process.env.jwt_secret);
    req.body.userId = decryptedToken.userId;
    next();
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

export default authMiddleware;
