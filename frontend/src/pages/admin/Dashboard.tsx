import StatsCard from "../../components/dashboard/StatsCard";
import RecentComplaints from "../../components/dashboard/RecentComplaints";
import ComplaintChart from "../../components/dashboard/ComplaintChart";

import {
  getAdminDashboardStats,
  getRecentAdminComplaints,
} from "../../services/dashboardService";

const Dashboard = () => {
  const stats =getAdminDashboardStats();

  const recentComplaints = getRecentAdminComplaints();

  return (
    <div className="space-y-6">
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

      <RecentComplaints
        complaints={recentComplaints}
        title="System Activity Feed"
      />
    </div>
  );
};

export default Dashboard;