import { useState } from "react";

import ComplaintTable from "../../components/complaint/ComplaintTable";
import SearchInput from "../../components/common/SearchInput";
import { getAssignedComplaints } from "../../services/complaintService";
import useSearch from "../../hooks/useSearch";


const AssignedComplaints = () => {
  const complaints = getAssignedComplaints();
  const [search, setSearch] = useState("");

  const filteredComplaints =
    useSearch(
      complaints,
      search,
      [
        "id",
        "subject",
        "department",
      ]
    );

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Assigned Complaints
        </h1>

        <SearchInput
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search complaints..."
        />
      </div>

      <ComplaintTable
        complaints={filteredComplaints}
      />
    </div>
  );
};

export default AssignedComplaints;