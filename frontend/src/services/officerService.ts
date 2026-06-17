import {
  getAssignedComplaintsApi,
  startComplaintApi,
  resolveComplaintApi,
} from "../api/officer.api";

export const getAssignedComplaints =
  async () => {
    const response =
      await getAssignedComplaintsApi();

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

    citizen:
      complaint.citizenId,

    resolutionNote:
      complaint.resolutionNote,

    resolvedAt:
      complaint.resolvedAt,
  })
);
  };

export const startComplaint =
  async (
    complaintId: string
  ) => {
    const response =
      await startComplaintApi(
        complaintId
      );

    return response.data;
  };

export const resolveComplaint =
  async (
    complaintId: string,
    resolutionNote: string
  ) => {
    const response =
      await resolveComplaintApi(
        complaintId,
        resolutionNote
      );

    return response.data;
  };