export type ComplaintStatus =
  | "pending"
  | "assigned"
  | "in-progress"
  | "resolved"
  | "closed";

export interface Complaint {
  id: string;

  title: string;

  description: string;

  category: string;

  status: ComplaintStatus;

  createdAt: string;

  assignedOfficer?: {
    _id?: string;
    name: string;
    email: string;
  };

  citizen?: {
    _id?: string;
    name: string;
    email: string;
  };

  resolutionNote?: string;

  resolvedAt?: string;
}