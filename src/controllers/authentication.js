const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { User } = require("../models/index");

async function login(req, res) {
  let { email, password } = req.body;
  try {
    result = await User.findOne({ where: { email: email } });
    try {
      let response = await bcrypt.compareSync(
        password,
        result.dataValues.password
      );
      if (response) {
        let keyValues = {
          id: result.dataValues.id,
          email: result.dataValues.email,
          password: result.dataValues.password,
        };
        let jwtToken = jwt.sign(
          {
            data: keyValues,
          },
          "mykey",
          { expiresIn: 60 * 60 }
        );
        res.send({ token: jwtToken });
      } else {
        res.send("Invalid email or password");
      }
    } catch (error) {
      console.log("here");
      res.send(error.message);
    }
  } catch (error) {
    console.log("here");

    res.send("Something went wrong");
  }
}

module.exports = {
  login,
};
