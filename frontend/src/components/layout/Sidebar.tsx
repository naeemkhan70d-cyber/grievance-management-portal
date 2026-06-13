import { NavLink } from "react-router-dom";

import { SIDEBAR_MENUS } from "../../utils/constants";
import { useAuth } from "../../hooks/useAuth";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({
  isOpen,
  onClose,
}: SidebarProps) => {
  const { user } = useAuth();

  const menuItems =
    SIDEBAR_MENUS[
      (user?.role as
        | "citizen"
        | "officer"
        | "admin") ?? "citizen"
    ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          h-screen
          w-64
          bg-slate-900
          text-white
          transition-transform
          duration-300
          md:translate-x-0
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
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
                    onClick={onClose}
                    className={({
                      isActive,
                    }) =>
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

                    <span>
                      {item.label}
                    </span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;