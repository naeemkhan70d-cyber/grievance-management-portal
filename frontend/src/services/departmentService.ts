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