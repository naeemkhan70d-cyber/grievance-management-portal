import { useState } from "react";
import toast from "react-hot-toast";

import Input from "../common/Input";
import Button from "../common/Button";
import Select from "../common/Select";
import TextArea from "../common/TextArea";

import {
  DEPARTMENT_OPTIONS,
} from "../../utils/constants";

import {
  VALIDATION_MESSAGES,
  validateRequired,
  validateMinLength,
} from "../../utils/validations";

import {
  createComplaint,
} from "../../services/complaintService";

const ComplaintForm = () => {
  const [department, setDepartment] =
    useState("");

  const [subject, setSubject] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !validateRequired(
        department
      )
    ) {
      toast.error(
        VALIDATION_MESSAGES.selectDepartment
      );
      return;
    }

    if (
      !validateRequired(
        subject
      )
    ) {
      toast.error(
        VALIDATION_MESSAGES.required(
          "Subject"
        )
      );
      return;
    }

    if (
      !validateMinLength(
        subject,
        5
      )
    ) {
      toast.error(
        VALIDATION_MESSAGES.minLength(
          "Subject",
          5
        )
      );
      return;
    }

    if (
      !validateRequired(
        description
      )
    ) {
      toast.error(
        VALIDATION_MESSAGES.required(
          "Description"
        )
      );
      return;
    }

    if (
      !validateMinLength(
        description,
        10
      )
    ) {
      toast.error(
        VALIDATION_MESSAGES.minLength(
          "Description",
          10
        )
      );
      return;
    }

    try {
      setLoading(true);

      await createComplaint({
        title: subject,
        description,
        category:
          department,
      });

      toast.success(
        "Complaint submitted successfully"
      );

      setDepartment("");
      setSubject("");
      setDescription("");
    } catch (error: any) {
      toast.error(
        error?.response?.data
          ?.message ||
          "Failed to create complaint"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        Create Complaint
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <Select
          label="Department"
          value={department}
          onChange={(e) =>
            setDepartment(
              e.target.value
            )
          }
          options={[
            {
              label:
                "Select Department",
              value: "",
            },
            ...DEPARTMENT_OPTIONS,
          ]}
        />

        <Input
          id="subject"
          label="Subject"
          placeholder="Enter complaint subject"
          value={subject}
          onChange={(e) =>
            setSubject(
              e.target.value
            )
          }
        />

        <TextArea
          label="Description"
          rows={5}
          value={description}
          placeholder="Describe your complaint"
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
        />

        <Button
          type="submit"
          fullWidth
        >
          {loading
            ? "Submitting..."
            : "Submit Complaint"}
        </Button>
      </form>
    </div>
  );
};

export default ComplaintForm;