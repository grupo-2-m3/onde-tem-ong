import React, { createContext, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { api } from "../../services/api";
import { iRegisterData } from "../../pages/RegisterPage/RegisterPage";
import { toast } from "react-toastify";

interface iAuthProvider {
  children: React.ReactNode;
}

export interface iLoginData {
  email: string;
  password: string;
}

export interface iUserInfo {
  bio: string;
  category?: string;
  background: string;
  avatar: string;
  email: string;
  id: number;
  name: string;
  userType: string;
  metas?: number;
}

interface iAuthContextProps {
  userLogin: (data: iLoginData) => void;
  registerSubmit: (data: iRegisterData) => void;
  loading: boolean;
  userInfo: iUserInfo;
  logout: () => void;
  navigate: NavigateFunction;
  updateProfile: (data: any) => Promise<void>;
  loadingUpdateUser: boolean;
}

export const AuthContext = createContext({} as iAuthContextProps);

export const AuthProvider = ({ children }: iAuthProvider) => {
  const [userInfo, setUserInfo] = useState({} as iUserInfo);
  const [loading, setLoading] = useState(false);
  const [loadingUpdateUser, setLoadingUpdateUser] = useState(false);
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

  const logout = () => {
    setUserInfo({} as iUserInfo);
    localStorage.clear();
    navigate("/");
  };

  const userLogin: SubmitHandler<iLoginData> = async (data) => {
    setLoading(true);
    try {
      const response = await api.post("/login", data);
      navigate("/profile");
      localStorage.setItem("@token", response.data.accessToken);
      localStorage.setItem("@id", response.data.user.id);
      setUserInfo(response.data.user);
      toast.success("Login realizado com sucesso!");
    } catch (err: any) {
      toast.error(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  const registerSubmit = async (data: iRegisterData) => {
    setLoading(true);
    try {
      const response = await api.post(
        "/users",
        data.userType === "ownerOng" ? { ...data, metas: 0 } : data
      );
      localStorage.clear();
      localStorage.setItem("USERID", response.data.accessToken);
      toast.success("Usuário criado com sucesso!");
      navigate("/login");
    } catch (error: any) {
      toast.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (data: iUserInfo) => {
    const userId = localStorage.getItem("@id");
    const token = localStorage.getItem("@token");
    setLoadingUpdateUser(true);
    try {
      const response = await api.patch(`/users/${userId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const responseData: iUserInfo = response.data;
      setUserInfo(responseData);
      toast.success("perfil atualizado com sucesso");
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingUpdateUser(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userLogin,
        registerSubmit,
        userInfo,
        loading,
        logout,
        navigate,
        updateProfile,
        loadingUpdateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
