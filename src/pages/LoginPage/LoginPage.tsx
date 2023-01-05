import Input from "../../components/Input/Input";

import User from "../../assets/User.svg";
import Logo from "../../assets/Logo.svg";
import UpLeft from "../../assets/Up Left.svg";
import Password from "../../assets/Password.svg";

import { StyledLoginPage } from "./StyledLoginPage";

const LoginPage = () => {
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
          <form>
            <Input label="EMAIL" src={User} placeholder="Digite seu email" />
            <Input
              label="SENHA"
              src={Password}
              placeholder="Digite sua senha"
            />
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
