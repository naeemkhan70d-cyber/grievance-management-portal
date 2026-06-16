const {
  getPendingUsersService,
  approveUserService,
  getAllComplaintsService,
  getAllOfficersService,
  getAllCitizensService,
  assignComplaintService,
  reassignComplaintService,
  getDashboardStatsService,
} = require("./admin.service");

const getPendingUsers =
  async (req, res) => {
    try {
      const users =
        await getPendingUsersService();

      res.status(200).json({
        success: true,
        count: users.length,
        data: users,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const approveUser =
  async (req, res) => {
    try {
      const { id } = req.params;

      const { role } =
        req.body;

      const user =
        await approveUserService({
          id,
          role,
        });

      res.status(200).json({
        success: true,
        message:
          "User approved successfully",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getAllComplaints =
  async (req, res) => {
    try {
      const {
        page = 1,
        limit = 10,
        status,
        category,
        officerId,
      } = req.query;

      const result =
        await getAllComplaintsService(
          {
            page:
              Number(page),
            limit:
              Number(limit),
            status,
            category,
            officerId,
          }
        );

      res.status(200).json({
        success: true,
        total:
          result.total,
        currentPage:
          result.page,
        totalPages:
          result.totalPages,
        count:
          result.complaints
            .length,
        data:
          result.complaints,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };

  const getAllOfficers =
  async (req, res) => {
    try {
      const officers =
        await getAllOfficersService();

      res.status(200).json({
        success: true,
        count:
          officers.length,
        data: officers,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };

  const getAllCitizens =
  async (req, res) => {
    try {
      const citizens =
        await getAllCitizensService();

      res.status(200).json({
        success: true,
        count:
          citizens.length,
        data: citizens,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };

  const assignComplaint =
  async (req, res) => {
    try {
      const { id } =
        req.params;

      const {
        officerId,
      } = req.body;

      const complaint =
        await assignComplaintService({
          complaintId: id,
          officerId,
        });

      res.status(200).json({
        success: true,
        message:
          "Complaint assigned successfully",
        data: complaint,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };

  const reassignComplaint =
  async (req, res) => {
    try {
      const { id } =
        req.params;

      const {
        officerId,
      } = req.body;

      const complaint =
        await reassignComplaintService({
          complaintId: id,
          officerId,
        });

      res.status(200).json({
        success: true,
        message:
          "Complaint reassigned successfully",
        data: complaint,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };

  const getDashboardStats =
  async (req, res) => {
    try {
      const stats =
        await getDashboardStatsService();

      res.status(200).json({
        success: true,
        data: stats,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };

module.exports = {
  getPendingUsers,
  approveUser,
  getAllComplaints,
  getAllOfficers,
  getAllCitizens,
  assignComplaint,
  reassignComplaint,
  getDashboardStats,
};