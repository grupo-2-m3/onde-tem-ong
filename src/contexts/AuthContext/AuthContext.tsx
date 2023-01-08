import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

import { api } from "../../services/api";
import { iRegisterData } from "../../pages/RegisterPage/RegisterPage";

interface iAuthProvider {
  children: React.ReactNode;
}

export interface iLoginData {
  email: string;
  password: string;
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

interface iAuthContextProps {
  userLogin: (data: iLoginData) => void;
  registerSubmit: (data: iRegisterData) => void;
  loading: boolean;
  userInfo: iUserInfo;
}

export const AuthContext = createContext({} as iAuthContextProps);

export const AuthProvider = ({ children }: iAuthProvider) => {
  const [userInfo, setUserInfo] = useState({} as iUserInfo);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserInfo = async () => {
      setLoading(true);
      const token = localStorage.getItem("@token");
      const id = localStorage.getItem("@id");
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      if (!token && !id) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await api.get(`/users/${id}`);
        setUserInfo(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getUserInfo();
  }, []);

  const userLogin: SubmitHandler<iLoginData> = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        navigate("/profile");
        localStorage.setItem("@token", response.data.accessToken);
        localStorage.setItem("@id", response.data.user.id);
        setUserInfo(response.data.user)
        // toast.success("Login realizado com sucesso!", { autoClose: 2000 });
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const registerSubmit = async (data: iRegisterData) => {
    try {
      const response = await api.post("/users", data);
      localStorage.clear();
      localStorage.setItem("USERID", response.data.accessToken);
      if (response.data.user.type === "owner_ong") {
        createOng(response.data.user);
      }
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const createOng = async (data: any) => {
    const newData = {
      userID: data.id,
      name: data.name,
      contact: [{ email: data.email }],
      category: data?.category,
      bio: data?.bio,
    };
    const UserID = localStorage.getItem("USERID");
    const response = await api.post("/ongs", newData, {
      headers: { Authorization: `Bearer ${UserID}` },
    });
  };

  return (
    <AuthContext.Provider
      value={{ userLogin, registerSubmit, userInfo, loading}}
    >
      {children}
    </AuthContext.Provider>
  );
};
