import {
  createComplaintApi,
  getMyComplaintsApi,
} from "../api/complaint.api";

export const createComplaint =
  async (data: {
    title: string;
    description: string;
    category: string;
  }) => {
    const response =
      await createComplaintApi(
        data
      );

    return response.data;
  };

export const getMyComplaints =
  async () => {
    const response =
      await getMyComplaintsApi();

    return response.data.data.map(
      (complaint: any) => ({
        id: complaint._id,

        title:
          complaint.title,

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