import { CardCarousel } from "./CardCarousel/CardCarousel";
import test from "../../../assets/imgs/test.svg";
import { StyledCarousel } from "./StyledCarousel";

export const Carousel = () => {
  return (
    <StyledCarousel>
      <CardCarousel image={test} />
      <CardCarousel image={test} />
      <CardCarousel image={test} />
    </StyledCarousel>
  );
};
