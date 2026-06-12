import {
  Pencil,
  Trash2,
} from "lucide-react";

import type { Department } from "../../types/department";
import EmptyState from "../common/EmptyState";

interface DepartmentTableProps {
  departments: Department[];
}

const DepartmentTable = ({
  departments,
}: DepartmentTableProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-4 py-3 text-left">
              ID
            </th>

            <th className="px-4 py-3 text-left">
              Department
            </th>

            <th className="px-4 py-3 text-left">
              Head
            </th>

            <th className="px-4 py-3 text-left">
              Complaints
            </th>

            <th className="px-4 py-3 text-left">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {departments.length > 0 ? (
            departments.map(
              (department) => (
                <tr
                  key={department.id}
                  className="border-t border-slate-200 hover:bg-slate-50"
                >
                  <td className="px-4 py-3">
                    {department.id}
                  </td>

                  <td className="px-4 py-3">
                    {department.name}
                  </td>

                  <td className="px-4 py-3">
                    {department.head}
                  </td>

                  <td className="px-4 py-3">
                    {
                      department.totalComplaints
                    }
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="rounded-lg bg-blue-50 p-2 text-blue-600 hover:bg-blue-100">
                        <Pencil size={18} />
                      </button>

                      <button className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={5}>
                <EmptyState message="No departments found" />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentTable;