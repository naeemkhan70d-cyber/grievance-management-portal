import { useState } from "react";

import ComplaintTable from "../../components/complaint/ComplaintTable";
import ComplaintCard from "../../components/complaint/ComplaintCard";
import Modal from "../../components/common/Modal";
import SearchInput from "../../components/common/SearchInput";

import { getCitizenComplaints } from "../../services/complaintService";



import type { Complaint } from "../../types/complaint";
import useSearch from "../../hooks/useSearch";

const MyComplaints = () => {
  const complaints = getCitizenComplaints();

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

  const [selectedComplaint, setSelectedComplaint] =
    useState<Complaint | null>(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const handleViewComplaint = (
    complaint: Complaint
  ) => {
    setSelectedComplaint(complaint);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedComplaint(null);
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          My Complaints
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
        onView={handleViewComplaint}
        selectedComplaintId={
          selectedComplaint?.id
        }
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Complaint Details"
      >
        {selectedComplaint && (
          <ComplaintCard
            complaint={selectedComplaint}
          />
        )}
      </Modal>
    </div>
  );
};

export default MyComplaints;