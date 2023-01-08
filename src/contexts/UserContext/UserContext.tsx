import { createContext } from "react";
import { api } from "../../services/api";

interface iUserProvider {
  children: React.ReactNode;
}

interface iUserContextProps {
}

export interface iOng {
  name: string;
  userID: number;
  bio: string;
  category: string;
  id: number;
  background: string;
  avatar: string;
}

export interface iDonateOng {
  userId: number;
  ongId: number;
  value: number;
  id: number;
}

export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: iUserProvider) => {

  const getAllOngs = async () => {
    const allOngs = await api.get<iOng[]>("/ongs");
    return allOngs;
  };

  return (
    <UserContext.Provider value={{}}>{children}</UserContext.Provider>
  );
};
