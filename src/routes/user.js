const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers");

const { userAuthenticateMiddleWare } = require("../middlewares");

router.route("/").get(getAllUsers);
router.route("/:id").get(getUserById);
router.route("/").post(userAuthenticateMiddleWare, addUser);
router.route("/:id").put(updateUser);
router.route("/:id").delete(deleteUser);

module.exports = router;
