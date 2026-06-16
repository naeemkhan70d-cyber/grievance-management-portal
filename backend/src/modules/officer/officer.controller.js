const {
  getAssignedComplaintsService,
  startComplaintService,
  resolveComplaintService,
} = require(
  "./officer.service"
);

const getAssignedComplaints =
  async (req, res) => {
    try {
      const complaints =
        await getAssignedComplaintsService(
          req.user.userId
        );

      res.status(200).json({
        success: true,
        count:
          complaints.length,
        data: complaints,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const startComplaint =
  async (req, res) => {
    try {
      const complaint =
        await startComplaintService(
          req.params.id,
          req.user.userId
        );

      res.status(200).json({
        success: true,
        message:
          "Complaint started successfully",
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

const resolveComplaint =
  async (req, res) => {
    try {
      const {
        resolutionNote,
      } = req.body;

      const complaint =
        await resolveComplaintService(
          req.params.id,
          req.user.userId,
          resolutionNote
        );

      res.status(200).json({
        success: true,
        message:
          "Complaint resolved successfully",
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

module.exports = {
  getAssignedComplaints,
  startComplaint,
  resolveComplaint,
};