import {
  lazy,
  Suspense,
} from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import PageLoader from "../components/common/PageLoader";
import DashboardLayout from "../components/layout/DashboardLayout";

import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

const Login = lazy(
  () => import("../pages/public/Login")
);

const Signup = lazy(
  () => import("../pages/public/Signup")
);

const NotFound = lazy(
  () => import("../pages/public/NotFound")
);

// Citizen
const CitizenDashboard = lazy(
  () => import("../pages/citizen/Dashboard")
);

const CreateComplaint = lazy(
  () =>
    import(
      "../pages/citizen/CreateComplaint"
    )
);

const MyComplaints = lazy(
  () =>
    import(
      "../pages/citizen/MyComplaints"
    )
);

const ComplaintDetails = lazy(
  () =>
    import(
      "../pages/citizen/ComplaintDetails"
    )
);

const Profile = lazy(
  () => import("../pages/citizen/Profile")
);

// Officer
const OfficerDashboard = lazy(
  () => import("../pages/officer/Dashboard")
);

const AssignedComplaints = lazy(
  () =>
    import(
      "../pages/officer/AssignedComplaints"
    )
);

const UpdateStatus = lazy(
  () =>
    import(
      "../pages/officer/UpdateStatus"
    )
);

const OfficerProfile = lazy(
  () => import("../pages/officer/Profile")
);

// Admin
const AdminDashboard = lazy(
  () => import("../pages/admin/Dashboard")
);

const Users = lazy(
  () => import("../pages/admin/Users")
);

const Departments = lazy(
  () =>
    import("../pages/admin/Departments")
);

const Complaints = lazy(
  () =>
    import("../pages/admin/Complaints")
);

const Reports = lazy(
  () => import("../pages/admin/Reports")
);

const AppRoutes = () => {
  return (
    <Suspense
      fallback={<PageLoader />}
    >
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        
<Route
  path="/signup"
  element={<Signup />}
/>
        <Route
          element={<ProtectedRoute />}
        >
          {/* Citizen */}
          <Route
            element={
              <RoleRoute
                allowedRole="citizen"
              />
            }
          >
            <Route
              path="/citizen"
              element={
                <DashboardLayout />
              }
            >
              <Route
                path="dashboard"
                element={
                  <CitizenDashboard />
                }
              />

              <Route
                path="create-complaint"
                element={
                  <CreateComplaint />
                }
              />

              <Route
                path="my-complaints"
                element={
                  <MyComplaints />
                }
              />

              <Route
                path="complaint-details"
                element={
                  <ComplaintDetails />
                }
              />

              <Route
                path="profile"
                element={<Profile />}
              />
            </Route>
          </Route>

          {/* Officer */}
          <Route
            element={
              <RoleRoute
                allowedRole="officer"
              />
            }
          >
            <Route
              path="/officer"
              element={
                <DashboardLayout />
              }
            >
              <Route
                path="dashboard"
                element={
                  <OfficerDashboard />
                }
              />

              <Route
                path="assigned-complaints"
                element={
                  <AssignedComplaints />
                }
              />

              <Route
                path="update-status"
                element={
                  <UpdateStatus />
                }
              />
              <Route
                path="profile"
                element={<OfficerProfile />}
              />

            </Route>
          </Route>

          {/* Admin */}
          <Route
            element={
              <RoleRoute
                allowedRole="admin"
              />
            }
          >
            <Route
              path="/admin"
              element={
                <DashboardLayout />
              }
            >
              <Route
                path="dashboard"
                element={
                  <AdminDashboard />
                }
              />

              <Route
                path="users"
                element={<Users />}
              />

              <Route
                path="departments"
                element={
                  <Departments />
                }
              />

              <Route
                path="complaints"
                element={
                  <Complaints />
                }
              />

              <Route
                path="reports"
                element={<Reports />}
              />
            </Route>
          </Route>
        </Route>

        {/* 404 Route */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;