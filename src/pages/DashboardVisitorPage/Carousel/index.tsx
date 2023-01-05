import { CardCarousel } from "./CardCarousel";
import { StyledCarousel } from "./styled";
import test from "../../../assets/Imgs/test.svg";
import React from "react";

export const Carousel = () => {
  return (
    <StyledCarousel>
      <CardCarousel image={test} />
      <CardCarousel image={test} />
      <CardCarousel image={test} />
    </StyledCarousel>
  );
};
