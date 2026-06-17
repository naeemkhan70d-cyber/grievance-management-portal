import axiosInstance from "./axios";

export const getAssignedComplaintsApi = () =>
  axiosInstance.get("/officer/complaints");

export const startComplaintApi = (
  complaintId: string
) =>
  axiosInstance.patch(
    `/officer/complaints/${complaintId}/start`
  );

export const resolveComplaintApi = (
  complaintId: string,
  resolutionNote: string
) =>
  axiosInstance.patch(
    `/officer/complaints/${complaintId}/resolve`,
    {
      resolutionNote,
    }
  );