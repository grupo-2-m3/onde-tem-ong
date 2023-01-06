import { useContext } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RiErrorWarningLine } from "react-icons/ri";

import { Error } from "../../components/Input/StyledInput";

import {
  AuthContext,
  iLoginData,
} from "../../contexts/AuthContext/AuthContext";

import Input from "../../components/Input/Input";

import User from "../../assets/imgs/User.svg";
import Logo from "../../assets/imgs/Logo.svg";
import UpLeft from "../../assets/imgs/Up Left.svg";
import Password from "../../assets/imgs/Password.svg";

import { StyledLoginPage } from "./StyledLoginPage";

const LoginPage = () => {
  const { userLogin } = useContext(AuthContext);

  const formSchemaLogin = yup.object({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginData>({
    resolver: yupResolver(formSchemaLogin),
  });

  return (
    <StyledLoginPage>
      <figure>
        <img className="upLeftImage" src={UpLeft} alt="" />
      </figure>
      <div className="container">
        <h1 className="loginMobile">Login</h1>
        <div className="loginContainer">
          <h1>Login</h1>
          <button className="returnButton">Voltar</button>
        </div>
        <div className="formContainer">
          <form onSubmit={handleSubmit(userLogin)}>
            <div
              className={
                errors.email ? "inputContainer error" : "inputContainer"
              }
            >
              <Input
                label="EMAIL"
                src={User}
                placeholder="Digite seu email"
                {...register("email")}
              />
              {errors.email && (
                <Error>
                  <RiErrorWarningLine size="20" className="ico" />
                  <span>{errors.email.message}</span>
                </Error>
              )}
            </div>
            <div
              className={
                errors.password ? "inputContainer error" : "inputContainer"
              }
            >
              <Input
                label="SENHA"
                src={Password}
                placeholder="Digite sua senha"
                {...register("password")}
              />
              {errors.password && (
                <Error>
                  <RiErrorWarningLine size="20" className="ico" />
                  <span>{errors.password.message}</span>
                </Error>
              )}
            </div>
            <button type="submit">Entrar</button>
          </form>
          <span>Ainda não possui conta?</span>
          <button className="registerButton">Cadastre-se</button>
        </div>
      </div>
      <img className="logoImage" src={Logo} alt="" />
    </StyledLoginPage>
  );
};

export default LoginPage;
