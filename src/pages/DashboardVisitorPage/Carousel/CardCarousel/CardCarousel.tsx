import React from "react";
import { StyledCardCarousel } from "./stlyed";

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
