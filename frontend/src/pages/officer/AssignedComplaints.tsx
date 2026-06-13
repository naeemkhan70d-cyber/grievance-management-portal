import { useState } from "react";

import DataTable from "../../components/common/DataTable";
import PageHeader from "../../components/common/PageHeader";
import StatusBadge from "../../components/complaint/StatusBadge";

import { getAssignedComplaints } from "../../services/complaintService";

import useSearch from "../../hooks/useSearch";

import type { Complaint } from "../../types/complaint";
import type { TableColumn } from "../../types/table";

const AssignedComplaints = () => {
  const complaints =
    getAssignedComplaints();

  const [search, setSearch] =
    useState("");

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

  const columns: TableColumn<Complaint>[] =
    [
      {
        header: "ID",
        accessor: "id",
      },
      {
        header: "Subject",
        accessor: "subject",
      },
      {
        header: "Department",
        accessor: "department",
      },
      {
        header: "Status",
        render: (
          complaint
        ) => (
          <StatusBadge
            status={
              complaint.status
            }
          />
        ),
      },
      {
        header: "Date",
        accessor: "date",
      },
    ];

  return (
    <div>
      <PageHeader
        title="Assigned Complaints"
        search={search}
        onSearch={setSearch}
        searchPlaceholder="Search complaints..."
      />

      <DataTable
        data={
          filteredComplaints
        }
        columns={columns}
        emptyMessage="No complaints found"
      />
    </div>
  );
};

export default AssignedComplaints;