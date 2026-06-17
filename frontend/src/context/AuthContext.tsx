import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { User } from "../types/user";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (
    user: User,
    token?: string
  ) => void;
  logout: () => void;
}

export const AuthContext =
  createContext<AuthContextType | null>(
    null
  );

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({
  children,
}: AuthProviderProps) => {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      setUser(
        JSON.parse(storedUser)
      );
    }

    setLoading(false);
  }, []);

  const login = (
    user: User,
    token?: string
  ) => {
    setUser(user);

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    if (token) {
      localStorage.setItem(
        "token",
        token
      );
    }
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem(
      "user"
    );

    localStorage.removeItem(
      "token"
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};