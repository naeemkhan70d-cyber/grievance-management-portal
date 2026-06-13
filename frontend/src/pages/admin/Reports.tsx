import {
  FileText,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import StatsCard from "../../components/dashboard/StatsCard";
import ComplaintChart from "../../components/dashboard/ComplaintChart";

const Reports = () => {
  const stats = [
    {
      title: "Total Complaints",
      value: 120,
      icon: FileText,
    },
    {
      title: "Pending",
      value: 30,
      icon: Clock3,
    },
    {
      title: "Resolved",
      value: 80,
      icon: CheckCircle2,
    },
    {
      title: "Rejected",
      value: 10,
      icon: XCircle,
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Reports
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>

      <ComplaintChart
        title="System Complaint Analytics"
      />
    </div>
  );
};

export default Reports;