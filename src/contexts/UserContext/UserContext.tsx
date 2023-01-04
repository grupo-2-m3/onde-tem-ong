import { createContext } from "react";

interface iUserProvider {
  children: React.ReactNode;
}

interface iUserContextProps {}

export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: iUserProvider) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
