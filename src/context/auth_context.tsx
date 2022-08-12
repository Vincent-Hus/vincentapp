import { createContext, ReactNode, useContext, useState } from "react";
import * as auth from "../auth-provider";

interface AuthForm {
  username: string;
  password: string;
}
interface RegisterForm {
  username: string;
  password: string;
  Email: string;
}

const AuthContext = createContext<
  | {
      user: auth.User | null;
      register: (form: RegisterForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<auth.User | null>(null);

  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: RegisterForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth 必須在AuthProvider中使用");
  }
  return context;
};
