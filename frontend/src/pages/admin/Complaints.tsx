import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import PageHeader from "../../components/common/PageHeader";
import DataTable from "../../components/common/DataTable";
import StatusBadge from "../../components/complaint/StatusBadge";
import Modal from "../../components/common/Modal";
import Button from "../../components/common/Button";
import SearchableSelect from "../../components/common/SearchableSelect";

import useSearch from "../../hooks/useSearch";

import {
  getAllComplaints,
  getAllOfficers,
  assignComplaint,
} from "../../services/adminService";

import type { Complaint } from "../../types/complaint";
import type { Officer } from "../../types/user";
import type { TableColumn } from "../../types/table";

const Complaints = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  const [officers, setOfficers] = useState<Officer[]>([]);
   

  const [search, setSearch] = useState("");

  const [
    selectedComplaint,
    setSelectedComplaint,
  ] = useState<Complaint | null>(
    null
  );

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [selectedOfficer, setSelectedOfficer] =
    useState("");

  useEffect(() => {
    loadComplaints();
    loadOfficers();
  }, []);

  const loadComplaints =
    async () => {
      try {
        const data =
          await getAllComplaints();

        setComplaints(data);
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to load complaints"
        );
      }
    };

  const loadOfficers =
    async () => {
      try {
        const data =
          await getAllOfficers();

        setOfficers(data);
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to load officers"
        );
      }
    };

  const handleView = (
    complaint: Complaint
  ) => {
    setSelectedComplaint(
      complaint
    );

    setSelectedOfficer("");

    setIsModalOpen(true);
  };

  const handleAssign =
    async () => {
      if (
        !selectedComplaint ||
        !selectedOfficer
      ) {
        return;
      }

      try {
        await assignComplaint(
          selectedComplaint.id,
          selectedOfficer
        );

        toast.success(
          "Complaint assigned successfully"
        );

        setIsModalOpen(false);

        loadComplaints();
      } catch (error) {
        console.error(error);

        toast.error(
          "Assignment failed"
        );
      }
    };


  const filteredComplaints =
  useSearch(
    complaints,
    search,
    [
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
  header: "Officer",
  render: (
    complaint
  ) => (
    <span
      onClick={() =>
        handleView(
          complaint
        )
      }
      className={`
        cursor-pointer
        ${
          complaint.assignedOfficer
            ? "text-slate-700"
            : "font-medium text-amber-600"
        }
      `}
    >
      {complaint
        .assignedOfficer
        ?.name ||
        "Assign Officer"}
    </span>
  ),
},
      {
        header: "Created",
        render: (
          complaint
        ) => (
          <span>
            {new Date(
              complaint.createdAt
            ).toLocaleDateString()}
          </span>
        ),
      },
    ];

  return (
    <div>
      <PageHeader
        title="Complaints"
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
    <div className="space-y-5">
      <div>
        <p className="text-sm text-slate-500">
          Title
        </p>

        <p className="font-medium">
          {selectedComplaint.title}
        </p>
      </div>

      <div>
        <p className="text-sm text-slate-500">
          Category
        </p>

        <p className="font-medium">
          {selectedComplaint.category}
        </p>
      </div>

      <div>
        <p className="text-sm text-slate-500">
          Description
        </p>

        <p className="mt-2 rounded-lg bg-slate-50 p-3">
          {selectedComplaint.description}
        </p>
      </div>

      <div>
        <p className="mb-2 text-sm text-slate-500">
          Status
        </p>

        <StatusBadge
          status={
            selectedComplaint.status
          }
        />
      </div>

      <div>
        <p className="text-sm text-slate-500">
          Assigned Officer
        </p>

        <p className="font-medium">
          {selectedComplaint
            .assignedOfficer
            ?.name ||
            "Not Assigned"}
        </p>
      </div>

      {selectedComplaint.status ===
  "pending" && (
  <>
    <SearchableSelect
      label="Assign Officer"
      value={selectedOfficer}
      onChange={setSelectedOfficer}
      placeholder="Search and select officer..."
      options={officers.map(
        (officer) => ({
          label: `${officer.name} (${officer.email})`,
          value: officer.id,
        })
      )}
    />

    <Button
      fullWidth
      disabled={!selectedOfficer}
      onClick={handleAssign}
    >
      Assign Complaint
    </Button>
  </>
)}
    </div>
  )}
</Modal>
    </div>
  );
};

export default Complaints;