import {
  FileText,
  Clock3,
  CheckCircle2,
  Users,
  Building2,
  ClipboardList,
  AlertCircle,
  LoaderCircle,
} from "lucide-react";

import type {
  DashboardStat,
  RecentComplaint,
} from "../types/dashboard";

export const getCitizenDashboardStats =
  (): DashboardStat[] => {
    return [
      {
        title: "Total Complaints",
        value: 24,
        icon: FileText,
      },
      {
        title: "Pending",
        value: 8,
        icon: Clock3,
      },
      {
        title: "In Progress",
        value: 6,
        icon: LoaderCircle,
      },
      {
        title: "Resolved",
        value: 10,
        icon: CheckCircle2,
      },
    ];
  };

export const getOfficerDashboardStats =
  (): DashboardStat[] => {
    return [
      {
        title: "Assigned Complaints",
        value: 40,
        icon: ClipboardList,
      },
      {
        title: "Pending",
        value: 15,
        icon: AlertCircle,
      },
      {
        title: "In Progress",
        value: 18,
        icon: LoaderCircle,
      },
      {
        title: "Resolved",
        value: 7,
        icon: CheckCircle2,
      },
    ];
  };

export const getAdminDashboardStats =
  (): DashboardStat[] => {
    return [
      {
        title: "Total Users",
        value: 250,
        icon: Users,
      },
      {
        title: "Total Complaints",
        value: 120,
        icon: FileText,
      },
      {
        title: "Departments",
        value: 12,
        icon: Building2,
      },
      {
        title: "Resolved Complaints",
        value: 85,
        icon: CheckCircle2,
      },
    ];
  };

export const getRecentCitizenComplaints =
  (): RecentComplaint[] => {
    return [
      {
        id: "CMP-001",
        subject: "Road Damage",
        status: "Pending",
      },
      {
        id: "CMP-002",
        subject: "Water Supply Issue",
        status: "Resolved",
      },
      {
        id: "CMP-003",
        subject: "Street Light Fault",
        status: "In Progress",
      },
      {
        id: "CMP-004",
        subject: "Garbage Collection",
        status: "Pending",
      },
      {
        id: "CMP-005",
        subject: "Water Leakage",
        status: "Resolved",
      },
      {
        id: "CMP-006",
        subject: "Street Light Repair",
        status: "In Progress",
      },
    ];
  };

export const getRecentOfficerComplaints =
  (): RecentComplaint[] => {
    return [
      {
        id: "CMP-101",
        subject: "Street Light Fault",
        status: "In Progress",
      },
      {
        id: "CMP-102",
        subject: "Road Damage",
        status: "Pending",
      },
      {
        id: "CMP-103",
        subject: "Water Leakage",
        status: "Resolved",
      },
      {
        id: "CMP-104",
        subject: "Drainage Issue",
        status: "Pending",
      },
    ];
  };

export const getRecentAdminComplaints =
  (): RecentComplaint[] => {
    return [
      {
        id: "CMP-201",
        subject: "Water Supply Issue",
        status: "Resolved",
      },
      {
        id: "CMP-202",
        subject: "Garbage Collection",
        status: "Rejected",
      },
      {
        id: "CMP-203",
        subject: "Road Damage",
        status: "Pending",
      },
      {
        id: "CMP-204",
        subject: "Street Light Fault",
        status: "In Progress",
      },
    ];
  };