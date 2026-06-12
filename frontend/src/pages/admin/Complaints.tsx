import { useState } from "react";

import ComplaintTable from "../../components/complaint/ComplaintTable";

import { getAllComplaints } from "../../services/complaintService";

import useSearch from "../../hooks/useSearch";
import PageHeader from "../../components/common/PageHeader";

const Complaints = () => {
  const complaints =
    getAllComplaints();

  const [search, setSearch] =
    useState("");

  const filteredComplaints =
    useSearch(
      complaints,
      search,
      ["id", "subject", "department"]
    );

  return (
    <div>
      <PageHeader
        title="Complaints"
        search={search}
        onSearch={setSearch}
        searchPlaceholder="Search complaints..."
      />

      <ComplaintTable
        complaints={filteredComplaints}
      />
    </div>
  );
};

export default Complaints;