import { useState } from "react";
import toast from "react-hot-toast";
import Modal from "../../components/common/Modal";
import UserForm from "../../components/user/UserForm";

import {
  getUsers,
  addUser,
} from "../../services/userService";

import useSearch from "../../hooks/useSearch";

import type { User } from "../../types/user";
import EmptyState from "../../components/common/EmptyState";
import PageHeader from "../../components/common/PageHeader";

const Users = () => {
  const [users, setUsers] =
    useState(getUsers());

  const [search, setSearch] =
    useState("");

  const [isModalOpen, setIsModalOpen] =
    useState(false);

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

  return (
    <div>
    <PageHeader
  title="Users"
  search={search}
  onSearch={setSearch}
  searchPlaceholder="Search users..."
  buttonText="Add User"
  onButtonClick={() =>
    setIsModalOpen(true)
  }
/>

      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left">
                ID
              </th>

              <th className="px-4 py-3 text-left">
                Name
              </th>

              <th className="px-4 py-3 text-left">
                Email
              </th>

              <th className="px-4 py-3 text-left">
                Role
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map(
              (user) => (
                <tr
                  key={user.id}
                  className="border-t border-slate-200 hover:bg-slate-50"
                >
                  <td className="px-4 py-3">
                    {user.id}
                  </td>

                  <td className="px-4 py-3">
                    {user.name}
                  </td>

                  <td className="px-4 py-3">
                    {user.email}
                  </td>

                  <td className="px-4 py-3 capitalize">
                    {user.role}
                  </td>
                </tr>
              )
            )}

            {filteredUsers.length === 0 && (
  <tr>
    <td colSpan={4}>
      <EmptyState message="No users found" />
    </td>
  </tr>
)}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
        title="Add User"
      >
        <UserForm
          onSubmit={
            handleAddUser
          }
        />
      </Modal>
    </div>
  );
};

export default Users;