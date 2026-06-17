import {
  useEffect,
  useState,
} from "react";

import DataTable from "../../components/common/DataTable";
import PageHeader from "../../components/common/PageHeader";
import Modal from "../../components/common/Modal";

import ComplaintCard from "../../components/complaint/ComplaintCard";
import StatusBadge from "../../components/complaint/StatusBadge";

import {
  getMyComplaints,
} from "../../services/complaintService";

import useSearch from "../../hooks/useSearch";

import type { Complaint } from "../../types/complaint";
import type { TableColumn } from "../../types/table";

const MyComplaints = () => {
  const [
    complaints,
    setComplaints,
  ] = useState<
    Complaint[]
  >([]);

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

  useEffect(() => {
    loadComplaints();
  }, []);

  const loadComplaints =
    async () => {
      try {
        const data =
          await getMyComplaints();

        setComplaints(data);
      } catch (error) {
        console.error(error);
      }
    };

  const handleViewComplaint = (
    complaint: Complaint
  ) => {
    setSelectedComplaint(
      complaint
    );

    setIsModalOpen(true);
  };

  const filteredComplaints =
    useSearch(
      complaints,
      search,
      [
        "id",
        "title",
        "category",
      ]
    );

  const columns: TableColumn<Complaint>[] =
    [
      {
        header: "ID",
        accessor: "id",
      },
      {
        header: "Title",
        accessor: "title",
      },
      {
        header: "Category",
        accessor: "category",
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
        render: (
          complaint
        ) =>
          new Date(
            complaint.createdAt
          ).toLocaleDateString(),
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
        onClose={() =>
          setIsModalOpen(false)
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