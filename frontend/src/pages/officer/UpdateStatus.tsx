import { useState } from "react";
import toast from "react-hot-toast";

import Button from "../../components/common/Button";
import Select from "../../components/common/Select";
import StatusBadge from "../../components/complaint/StatusBadge";

import {
  COMPLAINT_STATUS_OPTIONS,
} from "../../utils/constants";

import type {
  ComplaintStatus,
} from "../../types/complaint";

const UpdateStatus = () => {
  const [status, setStatus] =
    useState<ComplaintStatus>(
      "Pending"
    );

  const complaint = {
    id: "CMP-101",
    subject: "Street Light Fault",
    department:
      "Electricity Department",
    citizen: "Naeem Khan",
    date: "12 Jun 2026",
    description:
      "Street light not working from last 3 days.",
  };

  const handleSaveStatus = () => {
    toast.success(
      `Complaint marked as ${status}`
    );
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold">
          Update Complaint Status
        </h1>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm text-slate-500">
              Complaint ID
            </p>

            <p className="font-medium">
              {complaint.id}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Citizen
            </p>

            <p className="font-medium">
              {complaint.citizen}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Department
            </p>

            <p className="font-medium">
              {complaint.department}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Date
            </p>

            <p className="font-medium">
              {complaint.date}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-slate-500">
            Subject
          </p>

          <p className="font-medium">
            {complaint.subject}
          </p>
        </div>

        <div className="mt-6">
          <p className="text-sm text-slate-500">
            Description
          </p>

          <p className="mt-1 rounded-lg bg-slate-50 p-4">
            {complaint.description}
          </p>
        </div>

        <div className="mt-6">
          <p className="mb-2 text-sm text-slate-500">
            Current Status
          </p>

          <StatusBadge
            status={status}
          />
        </div>

        <div className="mt-6">
          <Select
            label="Update Status"
            value={status}
            onChange={(e) =>
              setStatus(
                e.target
                  .value as ComplaintStatus
              )
            }
            options={
              COMPLAINT_STATUS_OPTIONS
            }
          />
        </div>

        <div className="mt-6">
          <Button
            onClick={handleSaveStatus}
          >
            Save Status
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateStatus;