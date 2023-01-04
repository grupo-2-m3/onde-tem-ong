import { createContext } from "react";

interface iAuthProvider {
  children: React.ReactNode;
}

interface iAuthContextProps {}

export const AuthContext = createContext({} as iAuthContextProps);

export const AuthProvider = ({ children }: iAuthProvider) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
