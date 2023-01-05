import homePurple from "../../../../assets/Imgs/home-purple.svg";
import transparencia from "../../../../assets/Imgs/transparencia.svg";
import { StyledCardInfo } from "./styled";

interface iCardInfo {
  title: string;
  className: string;
  text: string;
}

export const CardInfo = ({ title, className, text }: iCardInfo) => {
  const Image = {
    img: homePurple,
    img2: transparencia,
  };
  return (
    <>
      <h3>{title}</h3>
      <StyledCardInfo Image={Image} className="card">
        <div className="conteiner_div_home">
          <div className={className}></div>
        </div>
        <p>{text}</p>
      </StyledCardInfo>
    </>
  );
};
