import axiosInstance from "./axios";

export const getPendingUsersApi = () =>
  axiosInstance.get("/auth/pending-users");

export const approveUserApi = (
  id: string,
  role: string
) =>
  axiosInstance.patch(
    `/auth/approve/${id}`,
    { role }
  );

/* ADD BELOW */

export const getAllComplaintsApi =
  () =>
    axiosInstance.get(
      "/admin/complaints"
    );

export const getAllOfficersApi =
  () =>
    axiosInstance.get(
      "/admin/officers"
    );

export const assignComplaintApi = (
  complaintId: string,
  officerId: string
) =>
  axiosInstance.patch(
    `/admin/complaints/${complaintId}/assign`,
    {
      officerId,
    }
  );