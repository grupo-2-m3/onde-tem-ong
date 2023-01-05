import { Header } from "../../components/Header";
import { Carousel } from "./Carousel";
import OndeTemOng from "../../assets/Imgs/onde-tem-ong2.svg";
import vetor from "../../assets/Imgs/vector1.svg";
import vetor3 from "../../assets/Imgs/vector3.svg";
import vetor2 from "../../assets/Imgs/vector2.svg";
import home from "../../assets/Imgs/home.svg";
import { ListCardInfo } from "./ListCardsInfo";
import { StyledDashboardVisitorPage } from "./styled";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const DashboardVisitorPage = () => {
  return (
    <StyledDashboardVisitorPage
      Imagen={{
        imagem: OndeTemOng,
      }}
    >
      <Header anchors={true} />
      <div className="carousel">
        <Carousel />
        <div>
          <img className="backImg" src={vetor} alt="" />
          <img className="backImg2" src={vetor2} alt="" />
          <img className="backImg3" src={vetor3} alt="" />
          <img className="home" src={home} alt="" />
        </div>
      </div>

      <div className="information">
        <ListCardInfo />
      </div>

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
            Todos Direitos Reservados a Onde Tem Ong
          </h3>
        </div>
      </footer>
    </StyledDashboardVisitorPage>
  );
};

export default DashboardVisitorPage;
