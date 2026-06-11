const ComplaintDetails = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h1 className="mb-4 text-2xl font-bold text-slate-800">
        Complaint Details
      </h1>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-slate-500">
            Complaint ID
          </p>
          <p className="font-medium text-slate-800">
            CMP-2026-001
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Department
          </p>
          <p className="font-medium text-slate-800">
            Public Works Department
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Subject
          </p>
          <p className="font-medium text-slate-800">
            Road Damage Complaint
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Description
          </p>
          <p className="font-medium text-slate-800">
            Large potholes are causing traffic and safety issues.
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Status
          </p>

          <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
            Pending
          </span>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Submitted On
          </p>
          <p className="font-medium text-slate-800">
            11 June 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetails;