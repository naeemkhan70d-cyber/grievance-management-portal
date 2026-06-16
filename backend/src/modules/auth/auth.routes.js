const express = require("express");

const {
  registerUser,
  loginUser,
  getPendingUsers,
  approveUser,
} = require("./auth.controller");

const authMiddleware = require(
  "../../middleware/auth.middleware"
);

const roleMiddleware = require(
  "../../middleware/role.middleware"
);

const router = express.Router();

router.post(
  "/register",
  registerUser
);

router.post(
  "/login",
  loginUser
);

router.get(
  "/pending-users",
  authMiddleware,
  roleMiddleware("admin"),
  getPendingUsers
);

router.patch(
  "/approve/:id",
  authMiddleware,
  roleMiddleware("admin"),
  approveUser
);


module.exports = router;