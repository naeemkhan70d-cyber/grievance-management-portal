import type { User, UserRole } from "../types/user";

interface DemoUser {
  id:string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

const demoUsers: DemoUser[] = [
  {
      id: "USR-001",
    name: "Naeem Khan",
    email: "citizen@gmail.com",
    password: "123456",
    role: "citizen",
  },
  {
      id: "USR-002",
    name: "Officer User",
    email: "officer@gmail.com",
    password: "123456",
    role: "officer",
  },
  {
      id: "USR-003",
    name: "Admin User",
    email: "admin@gmail.com",
    password: "123456",
    role: "admin",
  },
];

export const loginUser = (
  email: string,
  password: string
): User | null => {
  const user = demoUsers.find(
    (item) =>
      item.email === email &&
      item.password === password
  );

  if (!user) {
    return null;
  }

  return {
    id:user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};