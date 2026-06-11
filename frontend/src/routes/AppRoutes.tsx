import { Routes, Route } from "react-router-dom";

import Login from "../pages/public/Login";

import DashboardLayout from "../components/layout/DashboardLayout";

import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

// Citizen
import CitizenDashboard from "../pages/citizen/Dashboard";
import CreateComplaint from "../pages/citizen/CreateComplaint";
import MyComplaints from "../pages/citizen/MyComplaints";
import Profile from "../pages/citizen/Profile";

// Officer
import OfficerDashboard from "../pages/officer/Dashboard";
import AssignedComplaints from "../pages/officer/AssignedComplaints";

// Admin
import AdminDashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Departments from "../pages/admin/Departments";
import Reports from "../pages/admin/Reports";
import Complaints from "../pages/admin/Complaints";


import ComplaintDetails from "../pages/citizen/ComplaintDetails";

import UpdateStatus from "../pages/officer/UpdateStatus";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />

            <Route element={<ProtectedRoute />}>
                {/* Citizen Routes */}
                <Route element={<RoleRoute allowedRole="citizen" />}>
                    <Route path="/citizen" element={<DashboardLayout />}>
                        <Route path="dashboard" element={<CitizenDashboard />} />
                        <Route path="create-complaint" element={<CreateComplaint />} />
                        <Route path="my-complaints" element={<MyComplaints />} />
                        <Route path="complaint-details" element={<ComplaintDetails />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>
                </Route>

                {/* Officer Routes */}
                <Route element={<RoleRoute allowedRole="officer" />}>
                    <Route path="/officer" element={<DashboardLayout />}>
                        <Route path="dashboard" element={<OfficerDashboard />} />
                        <Route
                            path="assigned-complaints"
                            element={<AssignedComplaints />}
                        />
                        <Route
                            path="update-status"
                            element={<UpdateStatus />}
                        />

                    </Route>
                </Route>

                {/* Admin Routes */}
                <Route element={<RoleRoute allowedRole="admin" />}>
                    <Route path="/admin" element={<DashboardLayout />}>
                        <Route path="dashboard" element={<AdminDashboard />} />
                        <Route path="users" element={<Users />} />
                        <Route path="departments" element={<Departments />} />
                        <Route path="complaints" element={<Complaints />} />
                        <Route path="reports" element={<Reports />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;