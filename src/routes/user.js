const express = require("express");
const router = express.Router();
const { getAllUsers ,getUserById,addUser,deleteUser} = require("../controllers");

router.route("/").get(getAllUsers);
router.route("/:id").get(getUserById);
router.route("/").post(addUser);
router.route("/:id").delete(deleteUser);

module.exports = router;
