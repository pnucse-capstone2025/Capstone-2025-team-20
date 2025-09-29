// src/context/AuthContext.tsx
import React, { createContext, useContext } from "react";
import { UserToken, MeResponse } from "../type/user";
import { useAuthProvider } from "../hook/useAuthContext";

type AuthContextType = {
  user: UserToken | null;
  me: MeResponse | null;
  token: string | null;
  logIn: (email: string, password: string) => Promise<void>;
  logOut: () => void;
  loading: boolean;
  error: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth는 <AuthProvider> 안에서 사용되어야 합니다.");
  }
  return context;
};
