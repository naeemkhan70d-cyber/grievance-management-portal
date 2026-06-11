import { Bell, Moon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../common/Button";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const roleName = user?.role
    ? `${user.role.charAt(0).toUpperCase()}${user.role.slice(1)}`
    : "User";

const userInitial = user?.name
  ? user.name.charAt(0).toUpperCase()
  : "U";

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-end border-b border-slate-200 bg-white px-6">
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 hover:bg-slate-100">
          <Moon size={20} />
        </button>

        <button className="relative rounded-full p-2 hover:bg-slate-100">
          <Bell size={20} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-medium text-white">
              {userInitial}
            </div>

          </button>

          {isOpen && (
            <div className="absolute right-0 top-14 w-64 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
              <div className="mb-4 border-b border-slate-100 pb-3">
                <p className="text-sm font-medium text-slate-800">
                  {user?.email}
                </p>

                <p className="text-xs text-slate-500">
                  {roleName}
                </p>
              </div>

              <Button
                variant="danger"
                fullWidth
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;