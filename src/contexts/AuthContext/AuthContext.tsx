import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

import { api } from "../../services/api";

interface iAuthProvider {
  children: React.ReactNode;
}

export interface iLoginData {
  email: string;
  password: string;
}

interface iAuthContextProps {
  userLogin: (data: iLoginData) => void;
}

export const AuthContext = createContext({} as iAuthContextProps);

export const AuthProvider = ({ children }: iAuthProvider) => {
  const navigate = useNavigate();

  const userLogin: SubmitHandler<iLoginData> = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        navigate("/profile");
        localStorage.setItem("@token", response.data.accessToken);
        localStorage.setItem("@id", response.data.user.id);
        // toast.success("Login realizado com sucesso!", { autoClose: 2000 });
      })
      .catch((err) => console.log(err.response.data.message));
  };
  return (
    <AuthContext.Provider value={{ userLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
