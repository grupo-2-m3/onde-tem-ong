import { createContext, useState } from "react";
import { api } from "../../services/api";

interface iUserProvider {
  children: React.ReactNode;
}

interface iUserContextProps {
  historicDonates: iOngDonate[];
  historicDonatesOngMain: () => Promise<void>;
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

export interface iOngDonate {
  public: boolean;
  value: number;
  id: number;
  user: { userId: number; name: string; avatar: string };
  ong: { ongId: number; name: string; avatar: string };
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
  const [historicDonates, setHistoricDonates] = useState([] as iOngDonate[]);
  const [userDonate, setUserDonate] = useState({} as iDonateUser);

  const getAllOngs = async () => {
    const allOngs = await api.get("/ongs");
    return allOngs;
  };
  const getIdOng = async () => {
    const ongsAll = await getAllOngs();
    const idUser = Number(localStorage.getItem("@id"));
    const idOng = ongsAll.data.find((ong: any) => idUser === ong.userID);
    idOng && localStorage.setItem("@ongID", idOng.id);
  };
  const historicDonatesOngMain = async () => {
    const token = localStorage.getItem("@token");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const historicDonatesOng = async () => {
      const idOng = localStorage.getItem("@ongID");
      if (!idOng) {
        await getIdOng();
      }
      try {
        const idOng = localStorage.getItem("@ongID");
        const response = await api.get(`/ong/donates/${idOng}`);
        setHistoricDonates(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    historicDonatesOng();
  };

  const getDonateUser = async () => {
    const token = localStorage.getItem("@token");
    const id = localStorage.getItem("@id");
    const donateUser = await api.get<iDonateUser[]>(`/users/donate/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return donateUser;
  };

  return (
    <UserContext.Provider value={{ historicDonates, historicDonatesOngMain }}>
      {children}
    </UserContext.Provider>
  );
};
