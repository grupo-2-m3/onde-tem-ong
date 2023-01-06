import { CardCarousel } from "./CardCarousel/CardCarousel";
import { StyledCarousel } from "./styled";
import test from "../../../assets/imgs/test.svg";

export const Carousel = () => {
  return (
    <StyledCarousel>
      <CardCarousel image={test} />
      <CardCarousel image={test} />
      <CardCarousel image={test} />
    </StyledCarousel>
  );
};
