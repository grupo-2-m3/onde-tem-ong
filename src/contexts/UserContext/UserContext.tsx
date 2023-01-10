import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";

interface iUserProvider {
  children: React.ReactNode;
}

interface iUserContextProps {
  historicDonates: iOngDonate[];
  userDonate: iUserDonate[];
}

export interface iOng {
  name: string;
  userID: number;
  bio?: string;
  category: string;
  id: number;
  background: string;
  avatar: string;
}

export interface iOngDonate {
  public: boolean;
  value: number;
  id: number;
  user: { userId: number; name: string; avatar: string };
  ong: { ongId: number; name: string; avatar: string };
}

export interface iUserDonate {
  public: boolean;
  value: number;
  id: number;
  user: { userId: number; name: string; avatar: string };
  ong: { ongId: number; name: string; avatar: string; bio: string };
}


export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: iUserProvider) => {
  const [historicDonates, setHistoricDonates] = useState([] as iOngDonate[]);
  const [userDonate, setUserDonate] = useState([] as iUserDonate[]);

  const historicDonatesOngMain = async () => {
    const token = localStorage.getItem("@token");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    try {
      const idOng = localStorage.getItem("@id");
      const response = await api.get(`/ong/donates/${idOng}`);
      setHistoricDonates(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getDonateUser = async () => {
    const token = localStorage.getItem("@token");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    try {
      const id = localStorage.getItem("@id");
      const response = await api.get(`/user/donates/${id}`);
      setUserDonate(response.data)
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    historicDonatesOngMain();
    getDonateUser();
  }, []);

  return (
    <UserContext.Provider value={{ historicDonates, userDonate }}>
      {children}
    </UserContext.Provider>
  );
};
