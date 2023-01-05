import { StyledHeader } from "./styled";
import OndeTemOng from "../../assets/imgs/onde-tem-ong.svg";
import noUser from "../../assets/imgs/no_user.svg";
import { Link } from "react-router-dom";

interface iHeader {
  imageUser?: string;
  anchors?: boolean;
  callBack?: () => void;
}

export const Header = ({ imageUser, anchors, callBack }: iHeader) => {
  return (
    <StyledHeader>
      <div>
        <img
          className="image_logo"
          src={OndeTemOng}
          alt="Onde Tem Ong Logotipo"
        />
        <div className="conteiner_anchor">
          {anchors && (
            <div className="div_anchors">
              <a href="#quem_somos">Quem somos?</a>
              <a href="#transparencia">Transparência</a>
            </div>
          )}
          <div className="div_img_user">
            {imageUser ? (
              <button onClick={() => callBack}>
                <img
                  src={imageUser ? imageUser : noUser}
                  alt="imagem do usuario"
                />
              </button>
            ) : (
              <Link to="/login">
                <img
                  src={imageUser ? imageUser : noUser}
                  alt="imagem do usuario"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
