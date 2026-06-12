// import type { LucideIcon } from "lucide-react";

// export interface DashboardStat {
//   title: string;
//   value: number;
//   icon: LucideIcon;
// }

// export type ComplaintStatus =
//   | "Pending"
//   | "In Progress"
//   | "Resolved"
//   | "Rejected";

// export interface RecentComplaint {
//   id: string;
//   subject: string;
//   status: ComplaintStatus;
// }

import type { LucideIcon } from "lucide-react";

export interface DashboardStat {
  title: string;
  value: number;
  icon: LucideIcon;
}

export interface RecentComplaint {
  id: string;
  subject: string;
  status:
    | "Pending"
    | "In Progress"
    | "Resolved"
    | "Rejected";
}