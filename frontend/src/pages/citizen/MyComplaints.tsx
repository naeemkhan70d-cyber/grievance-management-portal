import { useState } from "react";

import DataTable from "../../components/common/DataTable";
import PageHeader from "../../components/common/PageHeader";
import Modal from "../../components/common/Modal";

import ComplaintCard from "../../components/complaint/ComplaintCard";
import StatusBadge from "../../components/complaint/StatusBadge";

import { getCitizenComplaints } from "../../services/complaintService";

import useSearch from "../../hooks/useSearch";

import type { Complaint } from "../../types/complaint";
import type { TableColumn } from "../../types/table";

const MyComplaints = () => {
  const complaints =
    getCitizenComplaints();

  const [search, setSearch] =
    useState("");

  const [
    selectedComplaint,
    setSelectedComplaint,
  ] = useState<Complaint | null>(
    null
  );

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const handleViewComplaint = (
    complaint: Complaint
  ) => {
    setSelectedComplaint(
      complaint
    );

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    setSelectedComplaint(null);
  };

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
      {
        header: "Action",
        render: (
          complaint
        ) => (
          <button
            onClick={() =>
              handleViewComplaint(
                complaint
              )
            }
            className="
              rounded-lg
              bg-blue-50
              px-3
              py-2
              text-blue-600
              transition-all
              hover:bg-blue-100
            "
          >
            View
          </button>
        ),
      },
    ];

  return (
    <div>
      <PageHeader
        title="My Complaints"
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

      <Modal
        isOpen={isModalOpen}
        onClose={
          handleCloseModal
        }
        title="Complaint Details"
      >
        {selectedComplaint && (
          <ComplaintCard
            complaint={
              selectedComplaint
            }
          />
        )}
      </Modal>
    </div>
  );
};

export default MyComplaints;