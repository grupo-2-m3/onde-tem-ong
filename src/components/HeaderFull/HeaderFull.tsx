import { useContext } from "react";
import OndeTemOng from "../../assets/imgs/ondeTemOng.svg";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import noUser from "../../assets/imgs/noUser.svg";
import { StyledHeaderFull } from "./StyledHeaderFull";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

interface iHeaderProps {
  children?: React.ReactNode;
}

const HeaderFull = ({ children }: iHeaderProps) => {
  const { userInfo, logout } = useContext(AuthContext);

  return (
    <StyledHeaderFull>
      <header>
        <img
          className="image_logo"
          src={OndeTemOng}
          alt="Onde Tem Ong Logotipo"
        />
        <div>
          <img
            src={userInfo.avatar ? userInfo.avatar : noUser}
            alt="Imagem de perfil do usuário"
          />
          <div className="downMenu">
            {userInfo && (
              <Link to={"/profile"} className="goToProfile">
                <img
                  src={userInfo.avatar ? userInfo.avatar : noUser}
                  alt="Imagem de perfil do usuário"
                />
                {userInfo.email}
              </Link>
            )}
            <div>{children}</div>
            {userInfo && (
              <Button styled="filled" onClick={() => logout()}>
                Sair
              </Button>
            )}
          </div>
        </div>
      </header>
    </StyledHeaderFull>
  );
};

export default HeaderFull;
