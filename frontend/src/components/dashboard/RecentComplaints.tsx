import { useState } from "react";

import StatusBadge from "../complaint/StatusBadge";
import SearchInput from "../common/SearchInput";

import useSearch from "../../hooks/useSearch";

import type { RecentComplaint } from "../../types/dashboard";
import EmptyState from "../common/EmptyState";

interface RecentComplaintsProps {
  complaints: RecentComplaint[];
  title: string;
}

const RecentComplaints = ({
  complaints,
  title,
}: RecentComplaintsProps) => {
  const [search, setSearch] =
    useState("");

  const filteredComplaints =
    useSearch(
      complaints,
      search,
      ["id", "subject"]
    );

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-slate-800">
          {title}
        </h2>

        <SearchInput
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search activity..."
        />
      </div>

      <div className="hide-scrollbar max-h-[520px] space-y-4 overflow-y-auto pr-2">
        {filteredComplaints.map(
          (complaint) => (
            <div
              key={complaint.id}
              className="flex items-center justify-between rounded-lg border border-slate-100 p-4 transition hover:bg-slate-50"
            >
              <div>
                <p className="font-medium text-slate-800">
                  {complaint.subject}
                </p>

                <p className="text-sm text-slate-500">
                  {complaint.id}
                </p>
              </div>

              <StatusBadge
                status={complaint.status}
              />
            </div>
          )
        )}
        {filteredComplaints.length === 0 && (
          <EmptyState message="No complaints found" />
        )}
      </div>
    </div>
  );
};

export default RecentComplaints;