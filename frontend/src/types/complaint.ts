export type ComplaintStatus =
  | "Pending"
  | "In Progress"
  | "Resolved"
  | "Rejected";

export interface Complaint {
  id: string;
  subject: string;
  department: string;
  status: ComplaintStatus;
  date: string;
}