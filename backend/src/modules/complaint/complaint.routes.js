const express = require(
  "express"
);

const {
  createComplaint,
  getMyComplaints,
  getComplaintById,
  submitFeedback,
  closeComplaint,
} = require(
  "./complaint.controller"
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

router.post(
  "/",
  authMiddleware,
  roleMiddleware("citizen"),
  createComplaint
);

router.get(
  "/my-complaints",
  authMiddleware,
  roleMiddleware("citizen"),
  getMyComplaints
);

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("citizen"),
  getComplaintById
);

router.patch(
  "/:id/feedback",
  authMiddleware,
  roleMiddleware("citizen"),
  submitFeedback
);

router.patch(
  "/:id/close",
  authMiddleware,
  roleMiddleware("citizen"),
  closeComplaint
);

module.exports = router;