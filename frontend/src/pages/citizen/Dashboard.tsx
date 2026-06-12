// import StatsCard from "../../components/dashboard/StatsCard";
// import RecentComplaints from "../../components/dashboard/RecentComplaints";
// import ComplaintChart from "../../components/dashboard/ComplaintChart";
// import {
//   getCitizenDashboardStats,
//   getRecentCitizenComplaints,
// } from "../../services/dashboardService";

// const Dashboard = () => {
//   const stats =
//     getCitizenDashboardStats();

//   const recentComplaints =
//     getRecentCitizenComplaints();

//   return (
//     <div className="space-y-6">
//       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//         {stats.map((item) => (
//           <StatsCard
//             key={item.title}
//             title={item.title}
//             value={item.value}
//              icon={item.icon}
//           />
//         ))}
//       </div>
//  <ComplaintChart />
//       <RecentComplaints
//         complaints={recentComplaints}
//       />
//     </div>
//   );
// };

// export default Dashboard;


import StatsCard from "../../components/dashboard/StatsCard";
import RecentComplaints from "../../components/dashboard/RecentComplaints";
import ComplaintChart from "../../components/dashboard/ComplaintChart";

import {
  getCitizenDashboardStats,
  getRecentCitizenComplaints,
} from "../../services/dashboardService";

const Dashboard = () => {
  const stats =
    getCitizenDashboardStats();

  const recentComplaints =
    getRecentCitizenComplaints();

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
        title="My Complaint Analytics"
      />
      <RecentComplaints
        complaints={recentComplaints}
        title="My Recent Activity"
      />

     
    </div>
  );
};

export default Dashboard;