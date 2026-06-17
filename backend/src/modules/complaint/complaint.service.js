const Complaint = require(
  "../../models/Complaint"
);

const createComplaintService =
  async ({
    title,
    description,
    category,
    citizenId,
  }) => {
    const complaint =
      await Complaint.create({
        title,
        description,
        category,
        citizenId,

        timeline: [
          {
            status: "pending",
            updatedBy:
              "citizen",
          },
        ],
      });

    return complaint;
  };

const getMyComplaintsService =
  async (citizenId) => {
    return await Complaint.find({
      citizenId,
    })
      .populate(
        "assignedOfficer",
        "name email"
      )
      .sort({
        createdAt: -1,
      });
  };

const getComplaintByIdService =
  async (
    complaintId,
    citizenId
  ) => {
    const complaint =
      await Complaint.findOne({
        _id: complaintId,
        citizenId,
      })
        .populate(
          "assignedOfficer",
          "name email"
        );

    if (!complaint) {
      throw new Error(
        "Complaint not found"
      );
    }

    return complaint;
  };

const submitFeedbackService =
  async ({
    complaintId,
    citizenId,
    rating,
    feedback,
  }) => {
    const complaint =
      await Complaint.findOne({
        _id: complaintId,
        citizenId,
      });

    if (!complaint) {
      throw new Error(
        "Complaint not found"
      );
    }

    if (
      complaint.status !==
      "resolved"
    ) {
      throw new Error(
        "Complaint is not resolved yet"
      );
    }

    complaint.rating =
      rating;

    complaint.feedback =
      feedback;

    complaint.feedbackAt =
      new Date();

    complaint.timeline.push({
      status:
        "feedback-submitted",
      updatedBy:
        "citizen",
      note: feedback,
    });

    await complaint.save();

    return complaint;
  };

  const closeComplaintService =
  async ({
    complaintId,
    citizenId,
  }) => {
    const complaint =
      await Complaint.findOne({
        _id: complaintId,
        citizenId,
      });

    if (!complaint) {
      throw new Error(
        "Complaint not found"
      );
    }

    if (
      complaint.status !==
      "resolved"
    ) {
      throw new Error(
        "Complaint must be resolved before closing"
      );
    }

    complaint.status =
      "closed";

    complaint.timeline.push({
      status: "closed",
      updatedBy:
        "citizen",
    });

    await complaint.save();

    return complaint;
  };

  const getCitizenDashboardService =
  async (citizenId) => {

    const totalComplaints =
      await Complaint.countDocuments({
        citizenId,
      });

    const pending =
      await Complaint.countDocuments({
        citizenId,
        status: "pending",
      });

    const assigned =
      await Complaint.countDocuments({
        citizenId,
        status: "assigned",
      });

    const inProgress =
      await Complaint.countDocuments({
        citizenId,
        status: "in-progress",
      });

    const resolved =
      await Complaint.countDocuments({
        citizenId,
        status: "resolved",
      });

    const closed =
      await Complaint.countDocuments({
        citizenId,
        status: "closed",
      });

    const recentComplaints =
      await Complaint.find({
        citizenId,
      })
        .sort({
          createdAt: -1,
        })
        .limit(5);

    return {
      totalComplaints,
      pending,
      assigned,
      inProgress,
      resolved,
      closed,
      recentComplaints,
    };
  };

module.exports = {
  createComplaintService,
  getMyComplaintsService,
  getComplaintByIdService,
  submitFeedbackService,
  closeComplaintService,
  getCitizenDashboardService,
};