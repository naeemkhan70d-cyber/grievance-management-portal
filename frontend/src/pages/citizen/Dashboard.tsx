import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import StatsCard from "../../components/dashboard/StatsCard";
import RecentComplaints from "../../components/dashboard/RecentComplaints";
import ComplaintChart from "../../components/dashboard/ComplaintChart";

import type {
  DashboardStat,
  RecentComplaint,
} from "../../types/dashboard";

import {
  getCitizenDashboard,
} from "../../services/dashboardService";

const Dashboard = () => {
  const [stats, setStats] =
    useState<DashboardStat[]>([]);

  const [
    recentComplaints,
    setRecentComplaints,
  ] = useState<RecentComplaint[]>([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard =
    async () => {
      try {
        const data =
          await getCitizenDashboard();

        setStats(
          data.stats
        );

        setRecentComplaints(
          data.recentComplaints
        );
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to load dashboard"
        );
      }
    };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(
          (item) => (
            <StatsCard
              key={
                item.title
              }
              title={
                item.title
              }
              value={
                item.value
              }
              icon={
                item.icon
              }
            />
          )
        )}
      </div>

      <ComplaintChart
        title="My Complaint Analytics"
      />

      <RecentComplaints
        complaints={
          recentComplaints
        }
        title="My Recent Activity"
      />
    </div>
  );
};

export default Dashboard;