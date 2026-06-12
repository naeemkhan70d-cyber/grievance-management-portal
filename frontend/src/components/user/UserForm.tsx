import { useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";

import type { User, UserRole } from "../../types/user";

interface UserFormProps {
  initialData?: User | null;
  onSubmit: (user: Omit<User, "id">) => void;
}

const UserForm = ({
  initialData,
  onSubmit,
}: UserFormProps) => {
  const [name, setName] = useState(
    initialData?.name || ""
  );

  const [email, setEmail] = useState(
    initialData?.email || ""
  );

  const [role, setRole] =
    useState<UserRole>(
      initialData?.role || "citizen"
    );

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onSubmit({
      name,
      email,
      role,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <Input
        label="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <div>
        <label className="mb-2 block text-sm font-medium">
          Role
        </label>

        <select
          value={role}
          onChange={(e) =>
            setRole(
              e.target.value as UserRole
            )
          }
          className="w-full rounded-lg border border-slate-300 px-4 py-3"
        >
          <option value="citizen">
            Citizen
          </option>

          <option value="officer">
            Officer
          </option>

          <option value="admin">
            Admin
          </option>
        </select>
      </div>

      <Button type="submit">
        Save User
      </Button>
    </form>
  );
};

export default UserForm;