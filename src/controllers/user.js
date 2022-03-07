const { User } = require("../models/index");

async function getAllUsers(req, res) {
  const dbResp = await User.findAll();
  res.send(dbResp);
}

async function getUserById(req, res) {
  let { id } = req.params;
  console.log(req.params);
  const dbResp = await User.findByPk(id);
  dbResp
    ? res.send(dbResp)
    : res.send({ message: "User not found!" }).status(404);
}

async function addUser(req, res) {
  let { firstName, lastName, email, password } = req.body;
  const dbResp = await User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });

  dbResp
    ? res.send(dbResp)
    : res.send({ message: "User not added" }).status(400);
}


async function deleteUser(req, res) {
  let { id } = req.params;
  const dbResp = await User.destroy({
    where: {
      id: id,
    },
  });

  dbResp === 1
    ? res.send({ message: "User deleted successfully" })
    : res.send({ message: "Something went wrong" }).sendStatus(400);
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  deleteUser,
};
