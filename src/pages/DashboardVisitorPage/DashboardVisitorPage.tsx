import OndeTemOng from "../../assets/imgs/ondeTemOng2.svg";
import vetor from "../../assets/imgs/vectorPrimario.svg";
import vetor3 from "../../assets/imgs/vectorTerciario.svg";
import vetor2 from "../../assets/imgs/vectorSecundario.svg";
import home from "../../assets/imgs/home.svg";
import blurDash from "../../assets/imgs/blurDashBord.svg";
import { ListCardInfo } from "./ListCardsInfo/ListCardInfo";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { StyledDashboardVisitorPage } from "./StyledDashboardVisitorPage";
import { useContext } from "react";
import HeaderFull from "../../components/HeaderFull/HeaderFull";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Carousel from "./Carousel/Carousel";

const DashboardVisitorPage = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <StyledDashboardVisitorPage
      Imagen={{
        imagem: OndeTemOng,
      }}
    >
      <HeaderFull
        linkText={userInfo.id ? "Dashboard ONGs" : "Registre-se"}
        linkTo={userInfo.id ? "/dashboard" : "/register"}
      />

      <div>
        <div className="boxCarousel">
          <Carousel />
        </div>

        <div className="information">
          <ListCardInfo />

          <footer>
            <div>
              <div>
                <button>
                  <AiOutlineGithub />
                </button>
                <button className="blue">
                  <BsFacebook />
                </button>
                <button className="blue">
                  <AiFillLinkedin />
                </button>
              </div>
              <h3 className="paragraph">
                Todos os direitos reservados a Onde Tem Ong?
              </h3>
            </div>
          </footer>
        </div>
      </div>
    </StyledDashboardVisitorPage>
  );
};

export default DashboardVisitorPage;
