import { useState } from "react";
import toast from "react-hot-toast";

import Input from "../common/Input";
import Button from "../common/Button";
import Select from "../common/Select";
import { USER_ROLE_OPTIONS } from "../../utils/constants";

import {
  VALIDATION_MESSAGES,
  validateRequired,
  validateMinLength,
  isValidEmail,
} from "../../utils/validations";

import type {
  User,
  UserRole,
} from "../../types/user";
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

  if (!validateRequired(name)) {
    toast.error(
      VALIDATION_MESSAGES.required(
        "Name"
      )
    );
    return;
  }

  if (
    !validateMinLength(name, 3)
  ) {
    toast.error(
      VALIDATION_MESSAGES.minLength(
        "Name",
        3
      )
    );
    return;
  }

  if (!isValidEmail(email)) {
    toast.error(
      VALIDATION_MESSAGES.invalidEmail
    );
    return;
  }

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

 <Select
  label="Role"
  value={role}
  onChange={(e) =>
    setRole(
      e.target.value as UserRole
    )
  }
  options={USER_ROLE_OPTIONS}
/>
      </div>

      <Button type="submit">
  {initialData
    ? "Update User"
    : "Create User"}
</Button>
    </form>
  );
};

export default UserForm;