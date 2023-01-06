import { StyledCardCarousel } from "./StyledCardCarousel";

interface iCardCarousel {
  image: string;
}

export const CardCarousel = ({ image }: iCardCarousel) => {
  return (
    <StyledCardCarousel>
      <img src={image} alt="magem da instituição" />
    </StyledCardCarousel>
  );
};
