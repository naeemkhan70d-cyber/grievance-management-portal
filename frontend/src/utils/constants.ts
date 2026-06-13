import {
  LayoutDashboard,
  FileText,
  ClipboardList,
  User,
  Users,
  Building2,
  BarChart3,
} from "lucide-react";

export const BUTTON_TEXT = {
  LOGIN: "Login",
  REGISTER: "Register",
  SAVE: "Save",
  UPDATE: "Update",
  DELETE: "Delete",
  CANCEL: "Cancel",
  SUBMIT: "Submit",
  LOGOUT: "Logout",
} as const;

export const USER_ROLES = {
  CITIZEN: "citizen",
  OFFICER: "officer",
  ADMIN: "admin",
} as const;

export const DEMO_USERS = [
  {
    email: "citizen@gmp.com",
    password: "123456",
    role: USER_ROLES.CITIZEN,
  },
  {
    email: "officer@gmp.com",
    password: "123456",
    role: USER_ROLES.OFFICER,
  },
  {
    email: "admin@gmp.com",
    password: "123456",
    role: USER_ROLES.ADMIN,
  },
] as const;

export const SIDEBAR_MENUS = {
  citizen: [
    {
      label: "Dashboard",
      path: "/citizen/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Create Complaint",
      path: "/citizen/create-complaint",
      icon: FileText,
    },
    {
      label: "My Complaints",
      path: "/citizen/my-complaints",
      icon: ClipboardList,
    },
    {
      label: "Profile",
      path: "/citizen/profile",
      icon: User,
    },
  ],

  officer: [
    {
      label: "Dashboard",
      path: "/officer/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Assigned Complaints",
      path: "/officer/assigned-complaints",
      icon: ClipboardList,
    },
    {
      label: "Update Status",
      path: "/officer/update-status",
      icon: FileText,
    },
    {
      label: "Profile",
      path: "/officer/profile",
      icon: User,
    },
  ],

  admin: [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Users",
      path: "/admin/users",
      icon: Users,
    },
    {
      label: "Departments",
      path: "/admin/departments",
      icon: Building2,
    },
    {
      label: "Complaints",
      path: "/admin/complaints",
      icon: ClipboardList,
    },
    {
      label: "Reports",
      path: "/admin/reports",
      icon: BarChart3,
    },
  ],
} as const;

export const USER_ROLE_OPTIONS = [
  {
    label: "Citizen",
    value: USER_ROLES.CITIZEN,
  },
  {
    label: "Officer",
    value: USER_ROLES.OFFICER,
  },
  {
    label: "Admin",
    value: USER_ROLES.ADMIN,
  },
] as const;

export const DEPARTMENT_OPTIONS = [
  {
    label: "Public Works Department",
    value: "PWD",
  },
  {
    label: "Water Department",
    value: "Water Department",
  },
  {
    label: "Electricity Department",
    value: "Electricity Department",
  },
  {
    label: "Municipal Corporation",
    value: "Municipal Corporation",
  },
] as const;

export const COMPLAINT_STATUS_OPTIONS = [
  {
    label: "Pending",
    value: "Pending",
  },
  {
    label: "In Progress",
    value: "In Progress",
  },
  {
    label: "Resolved",
    value: "Resolved",
  },
  {
    label: "Rejected",
    value: "Rejected",
  },
] as const;

export const PAGE_TITLES = {
  USERS: "Users",
  DEPARTMENTS: "Departments",
  COMPLAINTS: "Complaints",
  MY_COMPLAINTS: "My Complaints",
  ASSIGNED_COMPLAINTS:
    "Assigned Complaints",
  PROFILE: "Profile",
} as const;

export const EMPTY_MESSAGES = {
  USERS: "No users found",
  DEPARTMENTS:
    "No departments found",
  COMPLAINTS:
    "No complaints found",
} as const;