import StatusBadge from "./StatusBadge";

import type { Complaint } from "../../types/complaint";

interface ComplaintCardProps {
  complaint: Complaint;
}

const ComplaintCard = ({
  complaint,
}: ComplaintCardProps) => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-slate-800">
          {complaint.title}
        </h3>

        <StatusBadge
          status={complaint.status}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-sm text-slate-500">
            Complaint ID
          </p>

          <p className="mt-1 font-medium">
            {complaint.id}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Category
          </p>

          <p className="mt-1 font-medium">
            {complaint.category}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Created At
          </p>

          <p className="mt-1 font-medium">
            {new Date(
              complaint.createdAt
            ).toLocaleString()}
          </p>
        </div>

        {complaint.assignedOfficer && (
          <div>
            <p className="text-sm text-slate-500">
              Assigned Officer
            </p>

            <p className="mt-1 font-medium">
              {
                complaint
                  .assignedOfficer
                  .name
              }
            </p>

            <p className="text-sm text-slate-500">
              {
                complaint
                  .assignedOfficer
                  .email
              }
            </p>
          </div>
        )}
      </div>

      <div className="mt-6">
        <p className="text-sm text-slate-500">
          Description
        </p>

        <div className="mt-2 rounded-xl bg-slate-50 p-4">
          {complaint.description}
        </div>
      </div>

      {complaint.resolutionNote && (
        <div className="mt-6">
          <p className="text-sm text-slate-500">
            Resolution Note
          </p>

          <div className="mt-2 rounded-xl border border-green-200 bg-green-50 p-4">
            {complaint.resolutionNote}
          </div>
        </div>
      )}

      {complaint.resolvedAt && (
        <div className="mt-6">
          <p className="text-sm text-slate-500">
            Resolved At
          </p>

          <p className="mt-1 font-medium">
            {new Date(
              complaint.resolvedAt
            ).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default ComplaintCard;