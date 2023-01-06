import OndeTemOng from "../../assets/imgs/ondeTemOng.svg";
import noUser from "../../assets/imgs/noUser.svg";
import { Link } from "react-router-dom";
import { StyledHeader } from "./StyledHeader";

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
