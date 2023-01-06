import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import { StyledRegisterPage } from "./StyledRegisterPage";

import UserLight from "../../assets/imgs/User Light.svg";
import PasswordLight from "../../assets/imgs/Password Light.svg";
import PencilLight from "../../assets/imgs/Pencil Light.svg";
import LogoWhite from "../../assets/imgs/LogoWhite.svg";

export interface iRegisterData {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    type: string;
    category: string;
    bio: string;
}     

const RegisterPage = () => {

    const [typeUser, setTypeUser] = useState("");   

    const {registerSubmit} = useContext(AuthContext);

    const RegisterSchema = yup.object().shape({
        name: yup.string().required("O nome é obrigatório"),
        email: yup.string().required("O email é obrigatório"),
        password: yup.string().required("A senha é obrigatória"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas precisam coincidir"),
        type: yup.string().required("O tipo é obrigatório"),
        category: yup.string(),
        bio: yup.string(),
    })

    const { register, handleSubmit } = useForm<iRegisterData>({
        resolver: yupResolver(RegisterSchema)
    })

    return (
      <StyledRegisterPage>
        <div className="background">
          <main className="container">
            <div className="RegisterAndTitle">
              <div className="RegisterMobile">
                <h1 className="titleRegister">Cadastro</h1>
              </div>
            </div>
            <div className="formContainer">
              <form onSubmit={handleSubmit(registerSubmit)}>
                <div className="divBlockLeft">
                    <Input
                      styledColor="Withe" 
                      label="EMAIL"
                      src={UserLight} 
                      id="email" 
                      type="email" 
                      placeholder="Digite aqui seu email" 
                      {...register("email")}/>
                    <Input 
                      styledColor="Withe"
                      label="NOME - USUÁRIO OU ONG" 
                      src={PencilLight}
                      id="name" 
                      type="text" 
                      placeholder="Digite aqui seu nome" 
                      {...register("name")}/>
                    <Input
                      styledColor="Withe"
                      label="SENHA"
                      src={PasswordLight} 
                      id="password" 
                      type="password" 
                      placeholder="Digite aqui sua senha" 
                      {...register("password")}/>
                    <Input 
                      styledColor="Withe"
                      label="REPITA A SENHA" 
                      src={PasswordLight}
                      id="confirmPassword" 
                      type="password" 
                      placeholder="Confirme sua senha" 
                      {...register("confirmPassword")}/>
                    <label className="labelSelectType" htmlFor="">SELECIONE TIPO DE USUÁRIO</label>
                    <div className="selectTypeUser">
                      <Input
                        styledColor="placeholderInputRegister"
                        className="inputRadio"
                        src={UserLight} 
                        label="Usuário" 
                        id="user" 
                        type="radio" 
                        value="user" 
                        {...register("type")} 
                        onChange={(event) => setTypeUser(event.target.value)}/>
                      <Input 
                        styledColor="placeholderInputRegister"
                        className="inputRadio"
                        src={UserLight} 
                        label="CEO ONG" 
                        id="owner_ong" 
                        type="radio" 
                        value="owner_ong" 
                        {...register("type")} 
                        onChange={(event) => setTypeUser(event.target.value)}/>
                    </div>
                  </div>
                  <div className="divBlockRight">
                  {typeUser === "owner_ong" ?
                      <div className="divSelectCategory">
                          <div className="LabelAndSelect">
                            <label className="labelSelectCategory" htmlFor="category">SELECIONE A CATEGORIA</label>
                            <select id="category" {...register("category")}>
                              <option value="">Sem categoria</option>
                              <option value="seguranca alimentar">Segurança Alimentar</option>
                              <option value="Cultura">Cultura</option>
                              <option value="Saúde">Saúde</option>
                              <option value="Meio Ambiente">Meio Ambiente</option>
                              <option value="Desenvolvimento e defesa de direitos">Desenvolvimento e defesa de direitos</option>
                              <option value="Habitação">Habitação</option>
                              <option value="Animais">Animais</option>
                              <option value="Povos nativos">Povos nativos</option>
                              <option value="Tecnologia">Tecnologia</option>
                              <option value="Animais">Animais</option>
                          </select>
                          </div>
                          <Input 
                            styledColor="Grey100"
                            label="BIO" 
                            src={PencilLight}
                            id="bio" 
                            type="text" 
                            placeholder="Descreva sua ONG" 
                            {...register("bio")}/>   
                      </div> : ""
                  }
                  <button type="submit">Cadastrar</button>
                <span>Já possui uma conta?</span>
                <button type="button" className="LoginButton">Login</button>
                <img src={LogoWhite} alt=""/>
                </div>
              </form>
            </div>
          </main>
        </div>
      </StyledRegisterPage>
    )
}

export default RegisterPage;