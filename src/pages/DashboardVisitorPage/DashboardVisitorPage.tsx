import { Carousel } from "./Carousel/Carousel";
import OndeTemOng from "../../assets/imgs/ondeTemOng2.svg";
import vetor from "../../assets/imgs/vectorPrimario.svg";
import vetor3 from "../../assets/imgs/vectorTerciario.svg";
import vetor2 from "../../assets/imgs/vectorSecundario.svg";
import home from "../../assets/imgs/home.svg";
import { ListCardInfo } from "./ListCardsInfo/ListCardInfo";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Header } from "../../components/Header/Header";
import { StyledDashboardVisitorPage } from "./StyledDashboardVisitorPage";

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
      aa
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
              Todos Direitos Reservados a Onde Tem Ong
            </h3>
          </div>
        </footer>
      </div>
    </StyledDashboardVisitorPage>
  );
};

export default DashboardVisitorPage;
