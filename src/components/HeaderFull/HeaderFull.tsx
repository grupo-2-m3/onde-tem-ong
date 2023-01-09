import { useContext } from "react";
import OndeTemOng from "../../assets/imgs/ondeTemOng.svg";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import noUser from "../../assets/imgs/noUser.svg";
import { StyledHeaderFull } from "./StyledHeaderFull";
import { Link, LinkProps } from "react-router-dom";
import Button from "../Button/Button";

interface iHeaderProps {
  linkText: string;
  linkTo: string;
}

const HeaderFull = ({ linkText, linkTo }: iHeaderProps) => {
  const { userInfo, logout, navigate } = useContext(AuthContext);

  return (
    <StyledHeaderFull>
      <div>
        <header>
          <img
            className="image_logo"
            src={OndeTemOng}
            alt="Onde Tem Ong Logotipo"
          />
          <div>
            <Link to={userInfo.id ? "/profile" : "/login"}>
              <img
                src={userInfo.avatar ? userInfo.avatar : noUser}
                alt="Imagem de perfil do usuário"
              />
            </Link>
            <div className="downMenu">
              {userInfo.id && (
                <Link to={"/profile"} className="goToProfile">
                  <img
                    src={userInfo.avatar ? userInfo.avatar : noUser}
                    alt="Imagem de perfil do usuário"
                  />
                  {userInfo.email}
                </Link>
              )}
              <Link to={linkTo} className="dynamicLink">
                {linkText}
              </Link>
              {userInfo && (
                <Button
                  styled="filled"
                  onClick={() => {
                    if (userInfo.id) {
                      logout();
                    } else {
                      navigate("/login");
                    }
                  }}
                >
                  {userInfo.id ? "Sair" : "Fazer login"}
                </Button>
              )}
            </div>
          </div>
        </header>
      </div>
    </StyledHeaderFull>
  );
};

export default HeaderFull;