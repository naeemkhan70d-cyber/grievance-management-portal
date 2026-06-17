import axiosInstance from "./axios";

export const createComplaintApi = (
  data: {
    title: string;
    description: string;
    category: string;
  }
) =>
  axiosInstance.post(
    "/complaints",
    data
  );

export const getMyComplaintsApi =
  () =>
    axiosInstance.get(
      "/complaints/my-complaints"
    );

    export const getCitizenDashboardApi =
  () =>
    axiosInstance.get(
      "/complaints/dashboard"
    );