import { NavLink } from "react-router-dom";

import { SIDEBAR_MENUS } from "../../utils/constants";
import { useAuth } from "../../hooks/useAuth";

const Sidebar = () => {
  const { user } = useAuth();

  const menuItems =
    SIDEBAR_MENUS[
      (user?.role as "citizen" | "officer" | "admin") ??
        "citizen"
    ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white">
      <div className="border-b border-slate-800 px-6 py-5">
        <h1 className="text-xl font-bold">
          GMP Portal
        </h1>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3 rounded-lg px-4 py-3 transition-all
                    ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }
                  `
                  }
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;