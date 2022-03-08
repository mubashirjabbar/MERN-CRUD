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

  let dbResp;
  try {
    dbResp = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
  } catch (Excp) {
    console.log({ Excp });
    dbResp = {
      message: Excp.errors[0].message,
    };
  }

  res.send(dbResp);
  // dbResp
  //   ? res.send(dbResp)
  //   : res.send({ message: "User not added" }).status(400);
}

async function updateUser(req, res) {
  let { id } = req.params;
  let { firstName, lastName, email } = req.body;
  let dbResp;

  try {
    dbResp = await User.update(
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
      },
      {
        where: {
          id: id,
        },
      }
    );
  } catch (Excp) {
    console.log({ Excp });
    dbResp = {
      message: Excp.errors[0].message,
    };
  }
  dbResp[0] === 1
    ? res.send({ message: "User successfully updated" })
    : res.send({ message: "Something went wrong" }).sendStatus(400);
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
  updateUser,
};
