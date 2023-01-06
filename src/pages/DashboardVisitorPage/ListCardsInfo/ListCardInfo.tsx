import { CardInfo } from "./CardInfo/CardInfo";
import { StyledListCardsInfo } from "./StyledListCardInfo";

const text1 =
  "A nossa instituição, sem fins lucrativos, tem como missão dar visibilidade para ONGs e projetos sociais, conectando a instituição diretamente ao doador. Acreditamos que todos merecem a chance de fazer a diferença no mundo e de contribuir para uma sociedade mais justa e igualitária.";

const text2 =
  " Na nossa plataforma, você pode doar diretamente para a conta das instituições e projetos sociais que apoiamos, acompanhar as atividades e postagens dessas instituições e, se desejar, se candidatar para atuar como voluntário. Tudo isso de maneira segura e eficiente";
export const ListCardInfo = () => {
  return (
    <StyledListCardsInfo>
      <CardInfo title="Quem Somos?" text={text1} className="imgT" />
      <CardInfo title="Transparêcia" text={text2} className="imgH" />
    </StyledListCardsInfo>
  );
};
