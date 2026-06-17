
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
    | "pending"
    | "assigned"
    | "in-progress"
    | "resolved"
    | "closed";
}