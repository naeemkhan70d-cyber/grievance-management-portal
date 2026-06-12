import { Eye } from "lucide-react";

import StatusBadge from "./StatusBadge";

import type { Complaint } from "../../types/complaint";
import EmptyState from "../common/EmptyState";

interface ComplaintTableProps {
  complaints: Complaint[];
  onView?: (complaint: Complaint) => void;
  selectedComplaintId?: string;
}

const ComplaintTable = ({
  complaints,
  onView,
  selectedComplaintId,
}: ComplaintTableProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <table className="w-full min-w-[700px]">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-4 py-3 text-left">
              ID
            </th>

            <th className="px-4 py-3 text-left">
              Subject
            </th>

            <th className="px-4 py-3 text-left">
              Department
            </th>

            <th className="px-4 py-3 text-left">
              Status
            </th>

            <th className="px-4 py-3 text-left">
              Date
            </th>

            <th className="px-4 py-3 text-left">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {complaints.length > 0 ? (
            complaints.map((complaint) => (
              <tr
                key={complaint.id}
                className="border-t border-slate-200 hover:bg-slate-50"
              >
                <td className="px-4 py-3">
                  {complaint.id}
                </td>

                <td className="px-4 py-3">
                  {complaint.subject}
                </td>

                <td className="px-4 py-3">
                  {complaint.department}
                </td>

                <td className="px-4 py-3">
                  <StatusBadge
                    status={complaint.status}
                  />
                </td>

                <td className="px-4 py-3">
                  {complaint.date}
                </td>

                <td className="px-4 py-3">
                  <button
                    onClick={() =>
                      onView?.(complaint)
                    }
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 transition ${selectedComplaintId ===
                        complaint.id
                        ? "bg-red-100 text-red-600"
                        : "text-blue-600 hover:bg-blue-50"
                      }`}
                  >
                    <Eye size={18} />

                    {selectedComplaintId ===
                      complaint.id
                      ? "Viewing"
                      : "View"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>
                <EmptyState message="No complaints found" />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintTable;