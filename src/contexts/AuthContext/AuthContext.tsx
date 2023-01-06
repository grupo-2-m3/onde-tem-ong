import { createContext } from "react";
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

interface iAuthContextProps {
  userLogin: (data: iLoginData) => void;
  registerSubmit: (data: iRegisterData) => void;
}

export const AuthContext = createContext({} as iAuthContextProps);

export const AuthProvider = ({ children }: iAuthProvider) => {
  const navigate = useNavigate();

  const userLogin: SubmitHandler<iLoginData> = (data) => {
    api
      .post("/users", data)
      .then((response) => {
        navigate("/dashboard");
        localStorage.setItem("@token", response.data.accessToken);
        localStorage.setItem("@id", response.data.user.id);
        // toast.success("Login realizado com sucesso!", { autoClose: 2000 });
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const registerSubmit = async (data: iRegisterData) => {
    try {
      const response = await api.post("/users", data);
      localStorage.clear();
      localStorage.setItem("USERID", response.data.accessToken);
      if(response.data.user.type === "owner_ong"){
        createOng(response.data.user)
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  const createOng = async (data: any) => {
      const newData = {
        userID: data.id,
        name: data.name,
        contact: [{email: data.email}],  
        category: data?.category,
        bio: data?.bio,
      }
      const UserID = localStorage.getItem("USERID");
      const response = await api.post("/ongs", newData, {
        headers: {"Authorization": `Bearer ${UserID}`}
      })
  }

  return (
    <AuthContext.Provider value={{ userLogin, registerSubmit }}>
      {children}
    </AuthContext.Provider>
  );
};
