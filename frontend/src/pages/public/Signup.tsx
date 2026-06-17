import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { registerUser } from "../../services/authService";

const Signup = () => {
  const [name, setName] = useState("");
const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

const handleSignup = async () => {
  try {
    if (
      password !== confirmPassword
    ) {
      alert(
        "Passwords do not match"
      );
      return;
    }

    const response =
      await registerUser({
        name,
        email,
        password,
      });

    alert(
      response.message
    );

    navigate("/");
  } catch (error: any) {
  console.log("REGISTER ERROR:", error);
  console.log("RESPONSE:", error?.response);
  console.log("DATA:", error?.response?.data);

  alert(
    error?.response?.data?.message ||
    error?.message ||
    "Registration failed"
  );
}
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4 py-4">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
        <div className="mb-5 text-center">
          <h1 className="text-2xl font-bold text-white">
            Request Account Access
          </h1>

          <p className="mt-1 text-sm text-slate-300">
            Submit your registration request
            for administrator approval
          </p>
        </div>

        <div className="space-y-3">
          <Input
            id="name"
            label="Full Name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <Input
            id="email"
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

            <Input
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
            />
          </div>

          <Button
            fullWidth
            onClick={handleSignup}
          >
            Create Account
          </Button>

          <p className="text-center text-sm text-slate-300">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              Login
            </Link>
          </p>
        </div>

        <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/10 p-2">
          <p className="text-center text-xs text-amber-200">
            Account access requires
            administrator approval.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
