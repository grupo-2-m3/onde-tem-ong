import { createContext, useState } from "react";
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
export interface iDonateUser {
  userId: number;
  ongId: number;
  public: boolean;
  value: number;
  id: number;
}


export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: iUserProvider) => {
  const [userDonate, setUserDonate] = useState({} as iDonateUser);

  const getAllOngs = async () => {
    const allOngs = await api.get<iOng[]>("/ongs");
    return allOngs;
  };

  const getDonateUser = async()=>{
    const token = localStorage.getItem("@token");
    const id = localStorage.getItem("@id");
    const donateUser = await api.get<iDonateUser[]>(`/users/donate/${id}`,{
      headers: { Authorization: `Bearer ${token}` },
    })

    return donateUser
  }

  return (
    <UserContext.Provider value={{}}>{children}</UserContext.Provider>
  );
};
