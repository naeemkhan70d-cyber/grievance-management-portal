import type { User } from "../types/user";

const users: User[] = [
  {
    id: "USR-001",
    name: "Naeem Khan",
    email: "naeem@gmail.com",
    role: "citizen",
  },
  {
    id: "USR-002",
    name: "Amit Sharma",
    email: "amit@gmail.com",
    role: "officer",
  },
  {
    id: "USR-003",
    name: "Admin User",
    email: "admin@gmp.com",
    role: "admin",
  },
  {
    id: "USR-004",
    name: "Rahul Singh",
    email: "rahul@gmail.com",
    role: "citizen",
  },
];

export const getUsers = (): User[] => {
  return users;
};

export const addUser = (
  user: User
) => {
  users.push(user);
};

export const updateUser = (
  updatedUser: User
) => {
  const index = users.findIndex(
    (user) =>
      user.id === updatedUser.id
  );

  if (index !== -1) {
    users[index] = updatedUser;
  }
};

export const deleteUser = (
  id: string
) => {
  const index = users.findIndex(
    (user) => user.id === id
  );

  if (index !== -1) {
    users.splice(index, 1);
  }
};