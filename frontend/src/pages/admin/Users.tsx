import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import PageHeader from "../../components/common/PageHeader";
import DataTable from "../../components/common/DataTable";

import useSearch from "../../hooks/useSearch";

import {
  getPendingUsers,
  approveUser,
} from "../../services/adminService";

import type { User } from "../../types/user";
import type { TableColumn } from "../../types/table";

const Users = () => {
  const [users, setUsers] =
    useState<User[]>([]);

  const [search, setSearch] =
    useState("");


    console.log(users);
  const filteredUsers =
    useSearch(
      users,
      search,
      ["name", "email"]
    );

  useEffect(() => {
    loadPendingUsers();
  }, []);

  const loadPendingUsers =
    async () => {
      try {
        const data =
          await getPendingUsers();

        setUsers(data);
      } catch (error) {
        toast.error(
          "Failed to load users"
        );
      }
    };

  const handleApprove =
    async (
      id: string,
      role:
        | "citizen"
        | "officer"
    ) => {
      try {
        await approveUser(
          id,
          role
        );

        toast.success(
          "User approved successfully"
        );

        loadPendingUsers();
      } catch (error) {
        toast.error(
          "Approval failed"
        );
      }
    };

  const columns: TableColumn<User>[] =
    [
      {
        header: "Name",
        accessor: "name",
      },
      {
        header: "Email",
        accessor: "email",
      },
      {
        header: "Status",
        render: () => (
          <span className="font-medium text-amber-600">
            Pending
          </span>
        ),
      },
      {
        header: "Actions",
        render: (user) => (
          <div className="flex gap-2">
            <button
              onClick={() =>
                handleApprove(
                  user.id,
                  "citizen"
                )
              }
              className="rounded-md bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700"
            >
              Approve Citizen
            </button>

            <button
              onClick={() =>
                handleApprove(
                  user.id,
                  "officer"
                )
              }
              className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
            >
              Approve Officer
            </button>
          </div>
        ),
      },
    ];

  return (
    <div>
      <PageHeader
        title="Pending Users"
        search={search}
        onSearch={setSearch}
        searchPlaceholder="Search pending users..."
      />

      <DataTable
        data={filteredUsers}
        columns={columns}
        emptyMessage="No pending users found"
      />
    </div>
  );
};

export default Users;