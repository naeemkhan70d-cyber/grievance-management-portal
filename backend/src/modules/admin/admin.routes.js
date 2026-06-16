const express = require("express");

const {
  getPendingUsers,
  approveUser,
  getAllComplaints,
  getAllOfficers,
  getAllCitizens,
  assignComplaint,
  reassignComplaint,
  getDashboardStats,
} = require("./admin.controller");

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

router.get(
  "/complaints",
  authMiddleware,
  roleMiddleware("admin"),
  getAllComplaints
);

router.get(
  "/officers",
  authMiddleware,
  roleMiddleware("admin"),
  getAllOfficers
);

router.get(
  "/citizens",
  authMiddleware,
  roleMiddleware("admin"),
  getAllCitizens
);

router.patch(
  "/complaints/:id/assign",
  authMiddleware,
  roleMiddleware("admin"),
  assignComplaint
);

router.patch(
  "/complaints/:id/reassign",
  authMiddleware,
  roleMiddleware("admin"),
  reassignComplaint
);

router.get(
  "/dashboard",
  authMiddleware,
  roleMiddleware("admin"),
  getDashboardStats
);

module.exports = router;