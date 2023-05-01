const { verifyToken } = require("../../services/auth/index");
const { getUserById } = require("../../services/users");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      console.log(token);
      const accessToken = token.split(" ")[1];
      const data = await verifyToken(accessToken);
      const user = await getUserById(data.id);

      if (!user) {
        return res.status(403).send("Token is not valid");
      }
      req.user = user;
      next();
    }
  } catch (err) {
    return res.status(401).send("You're not authenticated");
  }
};

module.exports = {
  authenticate,
};
