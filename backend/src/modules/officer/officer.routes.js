const express = require("express");

const {
  getAssignedComplaints,
  startComplaint,
  resolveComplaint,
} = require(
  "./officer.controller"
);

const authMiddleware =
  require(
    "../../middleware/auth.middleware"
  );

const roleMiddleware =
  require(
    "../../middleware/role.middleware"
  );

const router =
  express.Router();

router.get(
  "/complaints",
  authMiddleware,
  roleMiddleware("officer"),
  getAssignedComplaints
);

router.patch(
  "/complaints/:id/start",
  authMiddleware,
  roleMiddleware("officer"),
  startComplaint
);

router.patch(
  "/complaints/:id/resolve",
  authMiddleware,
  roleMiddleware("officer"),
  resolveComplaint
);

module.exports = router;