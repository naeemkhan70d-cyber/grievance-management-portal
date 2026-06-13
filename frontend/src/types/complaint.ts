export type ComplaintStatus =
  | "Pending"
  | "In Progress"
  | "Resolved"
  | "Rejected";

export interface Complaint {
  id: string;
  subject: string;
  description: string;
  department: string;
  citizenName: string;
  status: ComplaintStatus;
  date: string;
}