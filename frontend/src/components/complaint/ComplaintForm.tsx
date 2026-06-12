import { useState } from "react";
import toast from "react-hot-toast";

import Input from "../common/Input";
import Button from "../common/Button";

const ComplaintForm = () => {
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !department.trim() ||
      !subject.trim() ||
      !description.trim()
    ) {
      toast.error("Please fill all fields");
      return;
    }

    console.log({
      department,
      subject,
      description,
    });

    toast.success(
      "Complaint submitted successfully"
    );

    setDepartment("");
    setSubject("");
    setDescription("");
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
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Department
          </label>

          <select
            value={department}
            onChange={(e) =>
              setDepartment(e.target.value)
            }
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option value="">
              Select Department
            </option>

            <option value="PWD">
              Public Works Department
            </option>

            <option value="Water">
              Water Department
            </option>

            <option value="Electricity">
              Electricity Department
            </option>

            <option value="Municipal">
              Municipal Corporation
            </option>
          </select>
        </div>

        <Input
          id="subject"
          label="Subject"
          placeholder="Enter complaint subject"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Description
          </label>

          <textarea
            rows={5}
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            placeholder="Describe your complaint"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        <Button type="submit">
          Submit Complaint
        </Button>
      </form>
    </div>
  );
};

export default ComplaintForm;