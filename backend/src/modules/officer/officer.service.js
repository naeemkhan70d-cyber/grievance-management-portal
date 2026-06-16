const Complaint = require(
  "../../models/Complaint"
);

const getAssignedComplaintsService =
  async (officerId) => {
    return await Complaint.find({
      assignedOfficer: officerId,
    })
      .populate(
        "citizenId",
        "name email"
      )
      .sort({
        createdAt: -1,
      });
  };

const startComplaintService =
  async (
    complaintId,
    officerId
  ) => {
    const complaint =
      await Complaint.findOne({
        _id: complaintId,
        assignedOfficer:
          officerId,
      });

    if (!complaint) {
      throw new Error(
        "Complaint not found or not assigned to you"
      );
    }

    complaint.status =
      "in-progress";

    complaint.timeline.push({
      status:
        "in-progress",
      updatedBy:
        "officer",
    });

    await complaint.save();

    return complaint;
  };

const resolveComplaintService =
  async (
    complaintId,
    officerId,
    resolutionNote
  ) => {
    const complaint =
      await Complaint.findOne({
        _id: complaintId,
        assignedOfficer:
          officerId,
      });

    if (!complaint) {
      throw new Error(
        "Complaint not found or not assigned to you"
      );
    }

    complaint.status =
      "resolved";

    complaint.resolutionNote =
      resolutionNote;

    complaint.resolvedAt =
      new Date();

    complaint.timeline.push({
      status: "resolved",
      updatedBy:
        "officer",
      note:
        resolutionNote,
    });

    await complaint.save();

    return complaint;
  };

module.exports = {
  getAssignedComplaintsService,
  startComplaintService,
  resolveComplaintService,
};