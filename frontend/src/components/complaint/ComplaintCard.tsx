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
          {complaint.subject}
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
            Department
          </p>

          <p className="mt-1 font-medium">
            {complaint.department}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Submitted Date
          </p>

          <p className="mt-1 font-medium">
            {complaint.date}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm text-slate-500">
          Description
        </p>

        <p className="mt-2 leading-7 text-slate-700">
          This is a sample complaint description.
          When backend is connected, actual
          complaint description will appear here.
        </p>
      </div>
    </div>
  );
};

export default ComplaintCard;