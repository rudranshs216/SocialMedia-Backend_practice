const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "123456@nih", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
