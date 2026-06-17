import {
  ClipboardList,
  AlertCircle,
  LoaderCircle,
  CheckCircle2,
   Users,
  UserCheck,
  Clock3,
  FileText,
} from "lucide-react";

import {
  getOfficerDashboardApi,
} from "../api/dashboard.api";

import {
  getAdminDashboardApi,
} from "../api/dashboard.api";

import {
  getCitizenDashboardApi,
} from "../api/dashboard.api";

export const getOfficerDashboard =
  async () => {
    const response =
      await getOfficerDashboardApi();

    const data =
      response.data.data;

    return {
      stats: [
        {
          title:
            "Assigned Complaints",
          value:
            data.assigned,
          icon:
            ClipboardList,
        },
        {
          title: "Pending",
          value:
            data.pending,
          icon:
            AlertCircle,
        },
        {
          title:
            "In Progress",
          value:
            data.inProgress,
          icon:
            LoaderCircle,
        },
        {
          title:
            "Resolved",
          value:
            data.resolved,
          icon:
            CheckCircle2,
        },
      ],

      recentComplaints:
        data.recentComplaints.map(
          (
            complaint: any
          ) => ({
            id:
              complaint._id,

            subject:
              complaint.title,

            status:
              complaint.status,
          })
        ),
    };
  };

  export const getAdminDashboard =
  async () => {
    const response =
      await getAdminDashboardApi();

    const data =
      response.data.data;

    return {
      stats: [
        {
          title:
            "Total Complaints",
          value:
            data.totalComplaints,
          icon:
            ClipboardList,
        },
        {
          title:
            "Pending Users",
          value:
            data.pendingUsers,
          icon:
            Clock3,
        },
        {
          title:
            "Citizens",
          value:
            data.totalCitizens,
          icon:
            Users,
        },
        {
          title:
            "Officers",
          value:
            data.totalOfficers,
          icon:
            UserCheck,
        },
      ],

      recentComplaints:
        data.recentComplaints.map(
          (
            complaint: any
          ) => ({
            id:
              complaint._id,

            subject:
              complaint.title,

            status:
              complaint.status,
          })
        ),
    };
  };

  export const getCitizenDashboard =
  async () => {
    const response =
      await getCitizenDashboardApi();

    const data =
      response.data.data;

    return {
      stats: [
        {
          title:
            "Total Complaints",
          value:
            data.totalComplaints,
          icon:
            FileText,
        },
        {
          title:
            "Pending",
          value:
            data.pending,
          icon:
            Clock3,
        },
        {
          title:
            "In Progress",
          value:
            data.inProgress,
          icon:
            LoaderCircle,
        },
        {
          title:
            "Resolved",
          value:
            data.resolved,
          icon:
            CheckCircle2,
        },
      ],

      recentComplaints:
        data.recentComplaints.map(
          (
            complaint: any
          ) => ({
            id:
              complaint._id,

            subject:
              complaint.title,

            status:
              complaint.status,
          })
        ),
    };
  };

 



