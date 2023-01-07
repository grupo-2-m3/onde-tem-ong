import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { AuthContext } from "../AuthContext/AuthContext";

interface iUserProvider {
  children: React.ReactNode;
}

interface iUserContextProps {
  loading: boolean;
  userInfo: iUserInfo[];
}

export interface iUserInfo {
  bio?: string;
  category?: string;
  email: string;
  id: number;
  name: string | number;
  type: string;
}

export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: iUserProvider) => {

  const [userInfo, setUserInfo] = useState([] as iUserInfo[])
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


  return <UserContext.Provider value={{loading, userInfo}}>{children}</UserContext.Provider>;
};
