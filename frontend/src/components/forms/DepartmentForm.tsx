import { useState } from "react";
import toast from "react-hot-toast";

import Input from "../common/Input";
import Button from "../common/Button";

import {
  VALIDATION_MESSAGES,
  validateRequired,
  validateMinLength,
} from "../../utils/validations";

import type { Department } from "../../types/department";

interface DepartmentFormProps {
  initialData?: Department | null;
  onSubmit: (
    department: Omit<
      Department,
      "id"
    >
  ) => void;
}

const DepartmentForm = ({
  initialData,
  onSubmit,
}: DepartmentFormProps) => {
  const [name, setName] =
    useState(
      initialData?.name || ""
    );

  const [head, setHead] =
    useState(
      initialData?.head || ""
    );

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !validateRequired(name)
    ) {
      toast.error(
        VALIDATION_MESSAGES.required(
          "Department Name"
        )
      );
      return;
    }

    if (
      !validateMinLength(
        name,
        3
      )
    ) {
      toast.error(
        VALIDATION_MESSAGES.minLength(
          "Department Name",
          3
        )
      );
      return;
    }

    if (
      !validateRequired(head)
    ) {
      toast.error(
        VALIDATION_MESSAGES.required(
          "Department Head"
        )
      );
      return;
    }

    onSubmit({
      name,
      head,
      totalComplaints:
        initialData
          ?.totalComplaints || 0,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <Input
        label="Department Name"
        value={name}
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
      />

      <Input
        label="Department Head"
        value={head}
        onChange={(e) =>
          setHead(
            e.target.value
          )
        }
      />

      <Button
        type="submit"
        fullWidth
      >
        {initialData
          ? "Update Department"
          : "Create Department"}
      </Button>
    </form>
  );
};

export default DepartmentForm;