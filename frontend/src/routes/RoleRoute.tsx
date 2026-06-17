import {
  Navigate,
  Outlet,
} from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import type { UserRole } from "../types/user";

interface RoleRouteProps {
  allowedRole: UserRole;
}

const RoleRoute = ({
  allowedRole,
}: RoleRouteProps) => {
  const {
    user,
    loading,
  } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  if (
    user.role !==
    allowedRole
  ) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return <Outlet />;
};

export default RoleRoute;