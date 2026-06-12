import StatsCard from "../../components/dashboard/StatsCard";
import RecentComplaints from "../../components/dashboard/RecentComplaints";
import ComplaintChart from "../../components/dashboard/ComplaintChart";

import {
  getOfficerDashboardStats,
  getRecentOfficerComplaints,
} from "../../services/dashboardService";

const Dashboard = () => {
  const stats = getOfficerDashboardStats();

  const recentComplaints = getRecentOfficerComplaints();

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
        title="Assigned Complaints Analytics"
      />

      <RecentComplaints
        complaints={recentComplaints}
        title="Assigned Work Queue"

      />
    </div>
  );
};

export default Dashboard;