const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "avinash", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
