import type { Department } from "../types/department";

const departments: Department[] = [
  {
    id: "DEP-001",
    name: "PWD",
    head: "Amit Sharma",
    totalComplaints: 52,
  },
  {
    id: "DEP-002",
    name: "Water Department",
    head: "Ravi Kumar",
    totalComplaints: 31,
  },
  {
    id: "DEP-003",
    name: "Electricity Department",
    head: "Suresh Verma",
    totalComplaints: 44,
  },
  {
    id: "DEP-004",
    name: "Municipal Corporation",
    head: "Rahul Singh",
    totalComplaints: 19,
  },
];

export const getDepartments =
  (): Department[] => {
    return departments;
  };

export const addDepartment = (
  department: Department
) => {
  departments.push(department);
};

export const updateDepartment = (
  updatedDepartment: Department
) => {
  const index =
    departments.findIndex(
      (department) =>
        department.id ===
        updatedDepartment.id
    );

  if (index !== -1) {
    departments[index] =
      updatedDepartment;
  }
};

export const deleteDepartment = (
  id: string
) => {
  const index =
    departments.findIndex(
      (department) =>
        department.id === id
    );

  if (index !== -1) {
    departments.splice(index, 1);
  }
};