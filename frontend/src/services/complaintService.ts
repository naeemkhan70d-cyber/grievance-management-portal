import type {
  Complaint,
  ComplaintStatus,
} from "../types/complaint";

const citizenComplaints: Complaint[] = [
  {
    id: "CMP-001",
    subject: "Road Damage",
    description:
      "Road is damaged and needs repair.",
    citizenName: "Naeem Khan",
    department: "PWD",
    status: "Pending",
    date: "11 Jun 2026",
  },
  {
    id: "CMP-002",
    subject: "Water Supply Issue",
    description:
      "Water supply is irregular.",
    citizenName: "Naeem Khan",
    department: "Water Department",
    status: "Resolved",
    date: "10 Jun 2026",
  },
];

const assignedComplaints: Complaint[] = [
  {
    id: "CMP-101",
    subject: "Road Damage",
    description:
      "Road repair required.",
    citizenName: "Rahul Singh",
    department: "PWD",
    status: "Pending",
    date: "11 Jun 2026",
  },
];

const allComplaints: Complaint[] = [
  ...citizenComplaints,
  ...assignedComplaints,
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

export const addComplaint = (
  complaint: Complaint
) => {
  citizenComplaints.push(complaint);
  allComplaints.push(complaint);
};

export const updateComplaintStatus = (
  id: string,
  status: ComplaintStatus
) => {
  const complaint =
    allComplaints.find(
      (item) => item.id === id
    );

  if (complaint) {
    complaint.status = status;
  }
};