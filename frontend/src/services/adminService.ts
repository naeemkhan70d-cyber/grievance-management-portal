import {
  getPendingUsersApi,
  approveUserApi,
  getAllComplaintsApi,
  getAllOfficersApi,
  assignComplaintApi,
} from "../api/admin.api";

export const getPendingUsers =
  async () => {
    const response =
      await getPendingUsersApi();

    return response.data.data.map(
      (user: any) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
      })
    );
  };

export const approveUser =
  async (
    id: string,
    role: string
  ) => {
    const response =
      await approveUserApi(
        id,
        role
      );

    return response.data;
  };

export const getAllComplaints =
  async () => {
    const response =
      await getAllComplaintsApi();

    return response.data.data.map(
      (complaint: any) => ({
        id: complaint._id,
        title: complaint.title,
        description:
          complaint.description,
        category:
          complaint.category,
        status:
          complaint.status,
        createdAt:
          complaint.createdAt,
        assignedOfficer:
          complaint.assignedOfficer,
      })
    );
  };

export const getAllOfficers =
  async () => {
    const response =
      await getAllOfficersApi();

    return response.data.data.map(
      (officer: any) => ({
        id: officer._id,
        name: officer.name,
        email: officer.email,
      })
    );
  };

export const assignComplaint =
  async (
    complaintId: string,
    officerId: string
  ) => {
    const response =
      await assignComplaintApi(
        complaintId,
        officerId
      );

    return response.data;
  };