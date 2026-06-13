import { useState } from "react";
import toast from "react-hot-toast";

import Modal from "../../components/common/Modal";
import ConfirmModal from "../../components/common/ConfirmModal";
import PageHeader from "../../components/common/PageHeader";
import ActionButtons from "../../components/common/ActionButtons";
import DataTable from "../../components/common/DataTable";

import UserForm from "../../components/forms/UserForm";

import useSearch from "../../hooks/useSearch";

import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../../services/userService";

import type { User } from "../../types/user";
import type { TableColumn } from "../../types/table";

const Users = () => {
  const [users, setUsers] =
    useState(getUsers());

  const [search, setSearch] =
    useState("");

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [editingUser, setEditingUser] =
    useState<User | null>(null);

  const [deleteUserId, setDeleteUserId] =
    useState<string | null>(null);

  const filteredUsers =
    useSearch(
      users,
      search,
      ["name", "email", "role"]
    );

  const handleAddUser = (
    userData: Omit<User, "id">
  ) => {
    const newUser: User = {
      id: `USR-${Date.now()}`,
      ...userData,
    };

    addUser(newUser);

    setUsers([...getUsers()]);

    toast.success(
      "User added successfully"
    );

    setIsModalOpen(false);
  };

  const handleEditUser = (
    userData: Omit<User, "id">
  ) => {
    if (!editingUser) {
      return;
    }

    updateUser({
      ...editingUser,
      ...userData,
    });

    setUsers([...getUsers()]);

    toast.success(
      "User updated successfully"
    );

    setEditingUser(null);
    setIsModalOpen(false);
  };

  const handleDeleteUser = () => {
    if (!deleteUserId) {
      return;
    }

    deleteUser(deleteUserId);

    setUsers([...getUsers()]);

    toast.success(
      "User deleted successfully"
    );

    setDeleteUserId(null);
  };

  const columns: TableColumn<User>[] =
    [
      {
        header: "ID",
        accessor: "id",
      },
      {
        header: "Name",
        accessor: "name",
      },
      {
        header: "Email",
        accessor: "email",
      },
      {
        header: "Role",
        render: (user) => (
          <span className="capitalize">
            {user.role}
          </span>
        ),
      },
      {
        header: "Actions",
        render: (user) => (
          <ActionButtons
            onEdit={() => {
              setEditingUser(user);
              setIsModalOpen(true);
            }}
            onDelete={() =>
              setDeleteUserId(user.id)
            }
          />
        ),
      },
    ];

  return (
    <div>
      <PageHeader
        title="Users"
        search={search}
        onSearch={setSearch}
        searchPlaceholder="Search users..."
        buttonText="Add User"
        onButtonClick={() => {
          setEditingUser(null);
          setIsModalOpen(true);
        }}
      />

      <DataTable
        data={filteredUsers}
        columns={columns}
        emptyMessage="No users found"
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setEditingUser(null);
          setIsModalOpen(false);
        }}
        title={
          editingUser
            ? "Edit User"
            : "Add User"
        }
      >
        <UserForm
          initialData={
            editingUser
          }
          onSubmit={
            editingUser
              ? handleEditUser
              : handleAddUser
          }
        />
      </Modal>

      <ConfirmModal
        isOpen={!!deleteUserId}
        title="Delete User"
        message="Are you sure you want to delete this user?"
        onConfirm={
          handleDeleteUser
        }
        onClose={() =>
          setDeleteUserId(null)
        }
      />
    </div>
  );
};

export default Users;