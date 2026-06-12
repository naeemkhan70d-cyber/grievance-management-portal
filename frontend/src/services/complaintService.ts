import type { Complaint } from "../types/complaint";

const citizenComplaints: Complaint[] = [
  {
    id: "CMP-001",
    subject: "Road Damage",
    department: "PWD",
    status: "Pending",
    date: "11 Jun 2026",
  },
  {
    id: "CMP-002",
    subject: "Water Supply Issue",
    department: "Water Department",
    status: "Resolved",
    date: "10 Jun 2026",
  },
];

const assignedComplaints: Complaint[] = [
  {
    id: "CMP-101",
    subject: "Road Damage",
    department: "PWD",
    status: "Pending",
    date: "11 Jun 2026",
  },
  {
    id: "CMP-102",
    subject: "Street Light Fault",
    department: "Electricity",
    status: "In Progress",
    date: "10 Jun 2026",
  },
];

const allComplaints: Complaint[] = [
  ...citizenComplaints,

  {
    id: "CMP-003",
    subject: "Street Light Fault",
    department: "Electricity",
    status: "In Progress",
    date: "09 Jun 2026",
  },

  {
    id: "CMP-004",
    subject: "Garbage Collection",
    department: "Municipal Corporation",
    status: "Rejected",
    date: "08 Jun 2026",
  },
];

export const getCitizenComplaints =
  (): Complaint[] => {
    return citizenComplaints;
  };

export const getAssignedComplaints =
  (): Complaint[] => {
    return assignedComplaints;
  };

export const getAllComplaints =
  (): Complaint[] => {
    return allComplaints;
  };

export const getComplaintById = (
  id: string
): Complaint | undefined => {
  return allComplaints.find(
    (complaint) =>
      complaint.id === id
  );
};