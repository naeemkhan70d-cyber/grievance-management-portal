const User = require("../../models/User");
const Complaint = require(
  "../../models/Complaint"
);
const getPendingUsersService =
  async () => {
    return await User.find({
      status: "pending",
    }).select("-password");
  };

const approveUserService =
  async ({
    id,
    role,
  }) => {
    const user =
      await User.findById(id);

    if (!user) {
      throw new Error(
        "User not found"
      );
    }

    user.status =
      "approved";

    user.role = role;

    await user.save();

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    };
  };

 const getAllComplaintsService =
  async ({
    page = 1,
    limit = 10,
    status,
    category,
    officerId,
  }) => {
    const query = {};

    if (status) {
      query.status = status;
    }

    if (category) {
      query.category =
        category;
    }

    if (officerId) {
      query.assignedOfficer =
        officerId;
    }

    const skip =
      (page - 1) * limit;

    const complaints =
      await Complaint.find(
        query
      )
        .populate(
          "citizenId",
          "name email"
        )
        .populate(
          "assignedOfficer",
          "name email"
        )
        .sort({
          createdAt: -1,
        })
        .skip(skip)
        .limit(limit);

    const total =
      await Complaint.countDocuments(
        query
      );

    return {
      complaints,
      total,
      page,
      totalPages:
        Math.ceil(
          total / limit
        ),
    };
  };

  const getAllOfficersService =
  async () => {
    return await User.find({
      role: "officer",
      status: "approved",
    }).select("-password");
  };

const getAllCitizensService =
  async () => {
    return await User.find({
      role: "citizen",
      status: "approved",
    }).select("-password");
  };

const assignComplaintService =
  async ({
    complaintId,
    officerId,
  }) => {
    const complaint =
      await Complaint.findById(
        complaintId
      );

    if (!complaint) {
      throw new Error(
        "Complaint not found"
      );
    }

    const officer =
      await User.findOne({
        _id: officerId,
        role: "officer",
        status: "approved",
      });

    if (!officer) {
      throw new Error(
        "Officer not found"
      );
    }

    complaint.assignedOfficer =
      officerId;

    complaint.assignedAt =
      new Date();

    complaint.status =
      "assigned";

    complaint.timeline.push({
      status: "assigned",
      updatedBy: "admin",
    });

    await complaint.save();

    return complaint;
  };

  const reassignComplaintService =
  async ({
    complaintId,
    officerId,
  }) => {
    const complaint =
      await Complaint.findById(
        complaintId
      );

    if (!complaint) {
      throw new Error(
        "Complaint not found"
      );
    }

    const officer =
      await User.findOne({
        _id: officerId,
        role: "officer",
        status: "approved",
      });

    if (!officer) {
      throw new Error(
        "Officer not found"
      );
    }

    complaint.assignedOfficer =
      officerId;

    complaint.timeline.push({
      status:
        "reassigned",
      updatedBy:
        "admin",
      note: `Reassigned to ${officer.name}`,
    });

    await complaint.save();

    return complaint;
  };

  const getDashboardStatsService =
  async () => {
    const totalComplaints =
      await Complaint.countDocuments();

    const pending =
      await Complaint.countDocuments({
        status: "pending",
      });

    const assigned =
      await Complaint.countDocuments({
        status: "assigned",
      });

    const inProgress =
      await Complaint.countDocuments({
        status: "in-progress",
      });

    const resolved =
      await Complaint.countDocuments({
        status: "resolved",
      });

    const closed =
      await Complaint.countDocuments({
        status: "closed",
      });

    const totalCitizens =
      await User.countDocuments({
        role: "citizen",
        status: "approved",
      });

    const totalOfficers =
      await User.countDocuments({
        role: "officer",
        status: "approved",
      });

    const pendingUsers =
      await User.countDocuments({
        status: "pending",
      });

    const recentComplaints =
      await Complaint.find()
        .sort({
          createdAt: -1,
        })
        .limit(5)
        .populate(
          "citizenId",
          "name email"
        );

    return {
      totalComplaints,
      pending,
      assigned,
      inProgress,
      resolved,
      closed,
      totalCitizens,
      totalOfficers,
      pendingUsers,
      recentComplaints,
    };
  };
  
module.exports = {
  getPendingUsersService,
  approveUserService,
  getAllComplaintsService,
  getAllOfficersService,
  getAllCitizensService,
  assignComplaintService,
  reassignComplaintService,
  getDashboardStatsService,
};