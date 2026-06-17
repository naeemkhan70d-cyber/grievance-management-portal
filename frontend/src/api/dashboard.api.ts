import axiosInstance from "./axios";

export const getOfficerDashboardApi =
  () =>
    axiosInstance.get(
      "/officer/dashboard"
    );

export const getAdminDashboardApi =
  () =>
    axiosInstance.get(
      "/admin/dashboard"
    );

    export const getCitizenDashboardApi =
  () =>
    axiosInstance.get(
      "/complaints/dashboard"
    );