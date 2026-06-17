import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

import { loginUser } from "../../services/authService";
import { useAuth } from "../../hooks/useAuth";

import { BUTTON_TEXT } from "../../utils/constants";

const Login = () => {
 const navigate = useNavigate();

const { login } = useAuth();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async () => {
  try {
    const response =
      await loginUser(
        email,
        password
      );

    const user =
      response.data.user;

    const token =
      response.data.token;

    localStorage.setItem(
      "token",
      token
    );

   login(user, token);

    switch (user.role) {
      case "citizen":
        navigate(
          "/citizen/dashboard"
        );
        break;

      case "officer":
        navigate(
          "/officer/dashboard"
        );
        break;

      case "admin":
        navigate(
          "/admin/dashboard"
        );
        break;

      default:
        navigate("/");
    }
  } catch (error: any) {
    alert(
      error?.response?.data
        ?.message ||
        "Login failed"
    );
  }
};
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4 py-6 sm:px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl sm:rounded-3xl sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Grievance Management Portal
          </h1>

          <p className="mt-2 text-xs text-slate-300 sm:text-sm">
            Streamlining Complaint Resolution Through Transparent Governance
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <Input
            id="email"
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            id="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-300 transition-colors hover:text-blue-200"
            >
              Forgot Password?
            </button>
          </div>

          <Button fullWidth  onClick={handleLogin}>
            {BUTTON_TEXT.LOGIN}
          </Button>
          <p className="text-center text-sm text-slate-300"> Don't have an account?{" "} 
            <Link to="/signup" className="font-medium text-blue-400 hover:text-blue-300" > Create Account </Link> </p>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="text-center text-xs text-slate-300 sm:text-sm">
            Secure Government Access Portal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;