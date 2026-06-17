import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";
import Button from "../../components/common/Button";
import TextArea from "../../components/common/TextArea";

import DataTable from "../../components/common/DataTable";
import PageHeader from "../../components/common/PageHeader";
import Modal from "../../components/common/Modal";

import StatusBadge from "../../components/complaint/StatusBadge";

import {
    startComplaint,
  resolveComplaint,
  getAssignedComplaints,
} from "../../services/officerService";

import useSearch from "../../hooks/useSearch";

import type { Complaint } from "../../types/complaint";
import type { TableColumn } from "../../types/table";

const AssignedComplaints = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  const [search, setSearch] = useState("");
const [isModalOpen, setIsModalOpen] = useState(false);
  const [resolutionNote, setResolutionNote] =useState("");

  const [
    selectedComplaint,
    setSelectedComplaint,
  ] = useState<Complaint | null>(
    null
  );


  useEffect(() => {
    loadComplaints();
  }, []);

  const loadComplaints =
    async () => {
      try {
        const data =
          await getAssignedComplaints();

        setComplaints(data);
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to load complaints"
        );
      }
    };

 const handleView = (
  complaint: Complaint
) => {
  setSelectedComplaint(
    complaint
  );

  setResolutionNote("");

  setIsModalOpen(true);
};

const handleStart =
  async () => {
    if (!selectedComplaint)
      return;

    try {
      await startComplaint(
        selectedComplaint.id
      );

      toast.success(
        "Complaint started successfully"
      );

      setIsModalOpen(false);

      loadComplaints();
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to start complaint"
      );
    }
  };

const handleResolve =
  async () => {
    if (!selectedComplaint)
      return;

    if (!resolutionNote.trim()) {
      toast.error(
        "Resolution note required"
      );

      return;
    }

    try {
      await resolveComplaint(
        selectedComplaint.id,
        resolutionNote
      );

      toast.success(
        "Complaint resolved successfully"
      );

      setIsModalOpen(false);

      loadComplaints();
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to resolve complaint"
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
      {
        header: "Details",
        render: (
          complaint
        ) => (
          <span
            onClick={() =>
              handleView(
                complaint
              )
            }
            className="
              cursor-pointer
              font-medium
              text-blue-600
              hover:underline
            "
          >
            View
          </span>
        ),
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

     <Modal
  isOpen={isModalOpen}
  onClose={() =>
    setIsModalOpen(false)
  }
  title="Complaint Details"
>
  {selectedComplaint && (
    <div className="space-y-5">

      {/* Title */}
      <div>
        <p className="text-sm text-slate-500">
          Title
        </p>

        <p className="font-medium">
          {selectedComplaint.title}
        </p>
      </div>

      {/* Category */}
      <div>
        <p className="text-sm text-slate-500">
          Category
        </p>

        <p className="font-medium">
          {selectedComplaint.category}
        </p>
      </div>

      {/* Description */}
      <div>
        <p className="text-sm text-slate-500">
          Description
        </p>

        <p className="mt-2 rounded-lg bg-slate-50 p-3">
          {selectedComplaint.description}
        </p>
      </div>

      {/* Status */}
      <div>
        <p className="text-sm text-slate-500">
          Status
        </p>

        <div className="mt-2">
          <StatusBadge
            status={
              selectedComplaint.status
            }
          />
        </div>
      </div>

      {/* Start Work */}
      {selectedComplaint.status ===
        "assigned" && (
        <Button
          fullWidth
          onClick={handleStart}
        >
          Start Work
        </Button>
      )}

      {/* Resolve */}
      {selectedComplaint.status ===
        "in-progress" && (
        <div className="space-y-4">
          <TextArea
            label="Resolution Note"
            rows={4}
            value={resolutionNote}
            onChange={(e) =>
              setResolutionNote(
                e.target.value
              )
            }
            placeholder="Enter resolution details..."
          />

          <Button
            fullWidth
            onClick={handleResolve}
          >
            Mark As Resolved
          </Button>
        </div>
      )}

      {/* Resolution Note */}
      {selectedComplaint.status ===
        "resolved" &&
        selectedComplaint.resolutionNote && (
          <div>
            <p className="text-sm text-slate-500">
              Resolution Note
            </p>

            <div className="mt-2 rounded-xl border border-green-200 bg-green-50 p-4">
              <p>
                {
                  selectedComplaint.resolutionNote
                }
              </p>
            </div>
          </div>
      )}

      {/* Resolved At */}
      {selectedComplaint.resolvedAt && (
        <div>
          <p className="text-sm text-slate-500">
            Resolved At
          </p>

          <p className="font-medium">
            {new Date(
              selectedComplaint.resolvedAt
            ).toLocaleString()}
          </p>
        </div>
      )}

    </div>
  )}
</Modal>
    </div>
  );
};

export default AssignedComplaints;