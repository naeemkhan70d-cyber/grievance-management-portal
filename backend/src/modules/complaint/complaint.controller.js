const {
  createComplaintService,
  getMyComplaintsService,
  getComplaintByIdService,
  submitFeedbackService,
  closeComplaintService,
  getCitizenDashboardService,
} = require(
  "./complaint.service"
);

const createComplaint =
  async (req, res) => {
    try {
      const {
        title,
        description,
        category,
      } = req.body;

      const complaint =
        await createComplaintService({
          title,
          description,
          category,
          citizenId:
            req.user.userId,
        });

      res.status(201).json({
        success: true,
        message:
          "Complaint created successfully",
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

const getMyComplaints =
  async (req, res) => {
    try {
      const complaints =
        await getMyComplaintsService(
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

const getComplaintById =
  async (req, res) => {
    try {
      const complaint =
        await getComplaintByIdService(
          req.params.id,
          req.user.userId
        );

      res.status(200).json({
        success: true,
        data: complaint,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const submitFeedback =
  async (req, res) => {
    try {
      const {
        rating,
        feedback,
      } = req.body;

      const complaint =
        await submitFeedbackService({
          complaintId:
            req.params.id,
          citizenId:
            req.user.userId,
          rating,
          feedback,
        });

      res.status(200).json({
        success: true,
        message:
          "Feedback submitted successfully",
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

  const closeComplaint =
  async (req, res) => {
    try {
      const complaint =
        await closeComplaintService({
          complaintId:
            req.params.id,
          citizenId:
            req.user.userId,
        });

      res.status(200).json({
        success: true,
        message:
          "Complaint closed successfully",
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

  const getCitizenDashboard =
  async (req, res) => {
    try {
      const stats =
        await getCitizenDashboardService(
          req.user.userId
        );

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
  createComplaint,
  getMyComplaints,
  getComplaintById,
  submitFeedback,
  closeComplaint,
   getCitizenDashboard,
};