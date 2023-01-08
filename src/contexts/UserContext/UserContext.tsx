import { listenerCount } from "process";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { AuthContext } from "../AuthContext/AuthContext";

interface iUserProvider {
  children: React.ReactNode;
}

interface iUserContextProps {
  loading: boolean;
  userInfo: iUserInfo;
}

export interface iUserInfo {
  bio?: string;
  category?: string;
  background?: string;
  avatar?: string;
  email: string;
  id: number;
  name: string | number;
  type: string;
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

  const [userInfo, setUserInfo] = useState({} as iUserInfo)
  const [loading, setLoading] = useState(true)

  const {userLogin} = useContext(AuthContext)

  useEffect(() => {
    const getUserInfo = async () => {
      setLoading(true)
      const token = localStorage.getItem("@token")
      const id = localStorage.getItem("@id")
      api.defaults.headers.common.authorization = `Bearer ${token}` 
      if(!token && !id) {
        setLoading(false)
        return;
      } 

      try{
        const { data } = await api.get(`/users/${id}`)
        setUserInfo(data)

      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getUserInfo()
  }, [userLogin])

    const getAllOngs = async () => {
      const allOngs = await api.get<iOng[]>("/ongs")
      return allOngs
    }

  return <UserContext.Provider value={{loading, userInfo}}>{children}</UserContext.Provider>;
};
