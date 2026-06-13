import { useState } from "react";
import toast from "react-hot-toast";

import Modal from "../../components/common/Modal";
import PageHeader from "../../components/common/PageHeader";
import DataTable from "../../components/common/DataTable";
import ActionButtons from "../../components/common/ActionButtons";

import DepartmentForm from "../../components/forms/DepartmentForm";

import useSearch from "../../hooks/useSearch";

import {
  getDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment,
} from "../../services/departmentService";

import type { Department } from "../../types/department";
import type { TableColumn } from "../../types/table";

const Departments = () => {
  const [
    departments,
    setDepartments,
  ] = useState(
    getDepartments()
  );

  const [search, setSearch] =
    useState("");

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [
    editingDepartment,
    setEditingDepartment,
  ] = useState<Department | null>(
    null
  );

  const filteredDepartments =
    useSearch(
      departments,
      search,
      ["name", "head"]
    );

  const handleAddDepartment = (
    departmentData: Omit<
      Department,
      "id"
    >
  ) => {
    const newDepartment: Department = {
      id: `DEP-${Date.now()}`,
      ...departmentData,
    };

    addDepartment(
      newDepartment
    );

    setDepartments([
      ...getDepartments(),
    ]);

    toast.success(
      "Department added successfully"
    );

    setIsModalOpen(false);
  };

  const handleEditDepartment = (
    departmentData: Omit<
      Department,
      "id"
    >
  ) => {
    if (!editingDepartment) {
      return;
    }

    updateDepartment({
      ...editingDepartment,
      ...departmentData,
    });

    setDepartments([
      ...getDepartments(),
    ]);

    toast.success(
      "Department updated successfully"
    );

    setEditingDepartment(
      null
    );

    setIsModalOpen(false);
  };

  const handleDeleteDepartment = (
    id: string
  ) => {
    deleteDepartment(id);

    setDepartments([
      ...getDepartments(),
    ]);

    toast.success(
      "Department deleted successfully"
    );
  };

  const columns: TableColumn<Department>[] =
    [
      {
        header: "ID",
        accessor: "id",
      },
      {
        header: "Department",
        accessor: "name",
      },
      {
        header: "Head",
        accessor: "head",
      },
      {
        header: "Complaints",
        accessor:
          "totalComplaints",
      },
      {
        header: "Actions",
        render: (
          department
        ) => (
          <ActionButtons
            onEdit={() => {
              setEditingDepartment(
                department
              );

              setIsModalOpen(
                true
              );
            }}
            onDelete={() =>
              handleDeleteDepartment(
                department.id
              )
            }
          />
        ),
      },
    ];

  return (
    <div>
      <PageHeader
        title="Departments"
        search={search}
        onSearch={setSearch}
        searchPlaceholder="Search departments..."
        buttonText="Add Department"
        onButtonClick={() => {
          setEditingDepartment(
            null
          );

          setIsModalOpen(
            true
          );
        }}
      />

      <DataTable
        data={
          filteredDepartments
        }
        columns={columns}
        emptyMessage="No departments found"
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setEditingDepartment(
            null
          );

          setIsModalOpen(
            false
          );
        }}
        title={
          editingDepartment
            ? "Edit Department"
            : "Add Department"
        }
      >
        <DepartmentForm
          initialData={
            editingDepartment
          }
          onSubmit={
            editingDepartment
              ? handleEditDepartment
              : handleAddDepartment
          }
        />
      </Modal>
    </div>
  );
};

export default Departments;