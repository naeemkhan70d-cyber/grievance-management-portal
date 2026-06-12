import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import StatusBadge from "../../components/complaint/StatusBadge";

const ComplaintDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800">
            Complaint Details
          </h1>

          <StatusBadge status="Pending" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-slate-500">
              Complaint ID
            </p>

            <p className="mt-1 font-medium text-slate-800">
              CMP-001
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Department
            </p>

            <p className="mt-1 font-medium text-slate-800">
              Public Works Department
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Subject
            </p>

            <p className="mt-1 font-medium text-slate-800">
              Road Damage
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Submitted On
            </p>

            <p className="mt-1 font-medium text-slate-800">
              11 June 2026
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-slate-500">
            Description
          </p>

          <p className="mt-2 leading-7 text-slate-700">
            Large potholes on the main road are
            causing traffic congestion and safety
            concerns for residents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetails;